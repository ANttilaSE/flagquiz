import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { QuestionChoice } from './question-choice';

@Injectable()
export class QuestionChoiceService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private quizUrl = 'http://localhost/quiz/api/quiz/';

	constructor(private http: Http) { }

	getQuestionChoiceList(qid: number, zid: number): Observable<QuestionChoice[]> {
		return this.http.get(this.quizUrl + zid + "/question/" + qid + "/choice")
			.map(this.extractData)
			.catch(this.handleError);
	}

	postAnswer(cid: number, qid: number, zid: number): Observable<Object> {
		let options = new RequestOptions({ headers: this.headers });
		return this.http.post(this.quizUrl + zid + "/question/" + qid + "/answer",
				{"id": cid},
				options
			)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
