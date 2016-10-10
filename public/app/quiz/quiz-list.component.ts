import { Component, OnInit } 	from '@angular/core';
import { QuizService } 			from './quiz.service';
import { Quiz } 				from './quiz';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk/dist/index';
import { LoginService } 		from '../login/login.service';

@Component({
	templateUrl: 'app/quiz/quiz-list.component.html',
	providers: [
		QuizService,
		FacebookService,
		LoginService
	]
})
export class QuizListComponent implements OnInit {
	quizList: Quiz[];
	errorMessage: string;
	loginStatus = {status: 0, user: null};

	constructor (private quizService: QuizService, private fb: FacebookService, private loginService: LoginService) {}

	ngOnInit(): void {
		this.getQuizList();
	}

	getQuizList(): void {
		this.quizService.getQuizList()
			.subscribe(
				quizList => this.quizList = quizList,
				error =>  this.errorMessage = <any>error
			);
	}

	login(): void {
		this.fb.login({scope: "email,public_profile"}).then(
			(response: FacebookLoginResponse) => {
				this.loginStatus.status = 2;
				this.postLogin(response.authResponse.accessToken);
			},
			(error: any) => {
				this.loginStatus.status = 1;
			}
		);
	}

	postLogin(token: string): void {
		this.loginService.postLogin(token)
			.subscribe(
				user => this.loginStatus.user = user,
				error => this.errorMessage = <any>error
			);
	}
}
