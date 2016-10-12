import { Component, OnInit } 	from '@angular/core';
import { QuizService } 			from './quiz.service';
import { Quiz } 				from './quiz';

@Component({
	templateUrl: 'app/quiz/quiz-list.component.html',
	providers: [
		QuizService
	]
})
export class QuizListComponent implements OnInit {
	quizList: Quiz[];
	errorMessage: string;

	constructor (private quizService: QuizService) {}

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
}
