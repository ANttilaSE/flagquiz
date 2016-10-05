import { Component, OnInit } 				from '@angular/core';
import { Router, ActivatedRoute, Params } 	from '@angular/router';

import { QuizService } 	from './quiz.service';
import { Quiz } 		from './quiz';

@Component({
	templateUrl: 'app/quiz/quiz.component.html',
	providers: [
		QuizService
	]
})
export class QuizComponent implements OnInit {
	quiz: Quiz;
	errorMessage: string;

	constructor (private quizService: QuizService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		let zid = +this.route.snapshot.params['zid'];
		this.getQuiz(zid);
	}

	getQuiz(zid: number): void {
		this.quizService.getQuiz(zid)
			.subscribe(
				quiz => this.quiz = quiz,
				error =>  this.errorMessage = <any>error
			);
	}
}
