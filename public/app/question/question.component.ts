import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { QuestionService } from './question.service';
import { QuestionChoiceService } from '../question-choice/question-choice.service';
import { Question } from './question';

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

	constructor (private questionService: QuestionService,
		private questionChoiceService: QuestionChoiceService,
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

	getQuestionChoiceList(qid, zid): void {
		this.questionChoiceService.getQuestionChoiceList(qid, zid)
			.subscribe(
				question => this.question.choices = question,
				error => this.errorMessage = <any>error
			);
	}

	postAnswer(cid, qid, zid): void {
		this.questionChoiceService.postAnswer(cid, qid, zid)
			.subscribe(
				answer => this.question.answer = answer,
				error => this.errorMessage = <any>error,
				() => this.getQuestion(this.questionList.shift().id, zid)
			);
	}

	answer(cid): void {
		this.postAnswer(cid, this.question.id, this.question.quiz_id);
	}
}
