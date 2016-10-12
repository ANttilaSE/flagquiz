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

	constructor (private quizService: QuizService,
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

	start(): void {
		let zid = +this.route.snapshot.params['zid'];
		this.getQuestionList(zid);
	}

	answer(cid: number): void {
		this.postAnswer(cid, this.question.id, this.question.quiz_id);
	}

	getQuiz(zid: number): void {
		this.quizService.getQuiz(zid)
			.subscribe(
				quiz => this.quiz = quiz,
				error =>  this.errorMessage = <any>error
			);
	}

	getQuestionList(zid: number): void {
		this.questionService.getQuestionList(zid)
			.subscribe(
				questionList => this.questionList = questionList,
				error => this.errorMessage = <any>error,
				() => this.getQuestion(this.questionList.shift().id, zid)
			);
	}

	getQuestion(qid: number, zid: number): void {
		this.questionService.getQuestion(qid, zid)
			.subscribe(
				question => this.question = question,
				error => this.errorMessage = <any>error,
				() => this.getQuestionChoiceList(qid, zid)
			);
	}

	getQuestionChoiceList(qid: number, zid: number): void {
		this.questionChoiceService.getQuestionChoiceList(qid, zid)
			.subscribe(
				question => this.question.choices = question,
				error => this.errorMessage = <any>error
			);
	}

	postAnswer(cid: number, qid: number, zid: number): void {
		if (this.questionList.length > 0) {
			let nextQId = this.questionList.shift();

			this.questionChoiceService.postAnswer(cid, qid, zid)
				.subscribe(
					answer => this.question.answer = answer,
					error => this.errorMessage = <any>error,
					() => this.getQuestion(nextQId.id, zid)
				);
		} else {
			let uid = +localStorage.getItem("uid");
			this.questionChoiceService.postAnswer(cid, qid, zid)
				.subscribe(
					answer => this.question.answer = answer,
					error => this.errorMessage = <any>error,
					() => {
						this.question = void 0;
						this.getResult(uid, zid);
					}
				);
		}
	}

	getResult(uid: number, zid: number): void {
		this.userQuestionChoiceService.getResultList(uid, zid)
			.subscribe(
				result => this.result = result,
				error => this.errorMessage = <any>error
			);
	}
}
