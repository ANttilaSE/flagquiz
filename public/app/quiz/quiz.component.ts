import { Component, OnInit } 				from '@angular/core';
import { Router, ActivatedRoute, Params } 	from '@angular/router';

import { QuizService } 	from './quiz.service';
import { Quiz } 		from './quiz';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question';
import { QuestionChoiceService } from '../question-choice/question-choice.service';
import { UserQuestionChoiceService } from '../user-question-choice/user-question-choice.service';
import { UserQuestionChoice } from '../user-question-choice/user-question-choice';

@Component({
	templateUrl: 'app/quiz/quiz.component.html',
	providers: [
		QuizService,
		QuestionService,
		QuestionChoiceService,
		UserQuestionChoiceService,
	]
})
export class QuizComponent implements OnInit {
	quiz: Quiz;
	questionList: any[];
	question: Question;
	errorMessage: string;
	result: Object;

	constructor (
		private quizService: QuizService,
		private questionService: QuestionService,
		private questionChoiceService: QuestionChoiceService,
		private userQuestionChoiceService: UserQuestionChoiceService,
		private route: ActivatedRoute,
		public router: Router
	) {}

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
