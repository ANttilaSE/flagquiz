import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { QuestionService } from './question.service';
import { QuestionChoiceService } from '../question-choice/question-choice.service';
import { UserQuestionChoiceService } from '../user-question-choice/user-question-choice.service';
import { Question } from './question';
import { UserQuestionChoice } from '../user-question-choice/user-question-choice.ts';

@Component({
	templateUrl: 'app/question/question.component.html',
	providers: [
		QuestionService
	]
})
export class QuestionComponent implements OnInit {
	question: Question;
	questionList: any[];
	errorMessage: string;
	result: UserQuestionChoice[];

	constructor (private questionService: QuestionService,
		private questionChoiceService: QuestionChoiceService,
		private userQuestionChoiceService: UserQuestionChoiceService,
		private route: ActivatedRoute) {}

	ngOnInit(): void {
		let zid = +this.route.snapshot.params['zid'];
		this.getQuestionList(zid);
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
			this.questionChoiceService.postAnswer(cid, qid, zid)
				.subscribe(
					answer => this.question.answer = answer,
					error => this.errorMessage = <any>error,
					() => this.getResult(zid)
				);
		}
	}

	answer(cid: number): void {
		this.postAnswer(cid, this.question.id, this.question.quiz_id);
	}

	getResult(zid: number): void {
		let uid = 1; // temp user_id
		this.userQuestionChoiceService.getResultList(uid, zid)
			.subscribe(
				result => this.result = result,
				error => this.errorMessage = <any>error
			);
	}
}
