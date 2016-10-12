import { Component, OnInit } 				from '@angular/core';
import { Router, ActivatedRoute, Params } 	from '@angular/router';

import { UserQuestionChoiceService } from '../user-question-choice/user-question-choice.service';
import { UserQuestionChoice } from '../user-question-choice/user-question-choice';

@Component({
	selector: "my-quiz-result",
	templateUrl: 'app/quiz-result/quiz-result.component.html',
	providers: [
		UserQuestionChoiceService,
	]
})
export class QuizResultComponent implements OnInit {
	errorMessage: string;
	result: Object;

	constructor (
		private userQuestionChoiceService: UserQuestionChoiceService,
		private route: ActivatedRoute,
		public router: Router
	) {}

	ngOnInit(): void {}

	getResult(uid: number, zid: number): void {
		this.userQuestionChoiceService.getResultList(uid, zid)
			.subscribe(
				result => this.result = result,
				error => this.errorMessage = <any>error
			);
	}
}
