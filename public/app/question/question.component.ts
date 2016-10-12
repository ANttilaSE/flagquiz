import { Component, OnInit, Input } 	from '@angular/core';
import { Router, ActivatedRoute, Params } 	from '@angular/router';

import { QuestionService } 			from './question.service';
import { Question } 				from './question';
import { QuestionChoiceService } 	from '../question-choice/question-choice.service';

@Component({
	selector: "my-quiz-question",
	templateUrl: 'app/question/question.component.html',
	providers: [
		QuestionService
	]
})
export class QuestionComponent implements OnInit {
	question: Question;
	questionList: any[];
	errorMessage: string;
	started: boolean = false;
	@Input() result;

	constructor (
		private questionService: QuestionService,
		private route: ActivatedRoute,
		public router: Router,
		private questionChoiceService: QuestionChoiceService,
	) {}

	ngOnInit(): void {}

	start(): void {
		let zid = +this.route.snapshot.params['zid'];
		this.getQuestionList(zid);
		this.started = true;
	}

	answer(cid: number): void {
		this.postAnswer(cid, this.question.id, this.question.quiz_id);
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
						this.question = void 0; //unset question
						this.result.getResult(uid, zid);
					}
				);
		}
	}
}
