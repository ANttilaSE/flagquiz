import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Question } from './question';

@Injectable()
export class QuestionService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private quizUrl = 'http://localhost/quiz/api/quiz/';

	constructor(private http: Http) { }

	getQuestionList(zid: number): Observable<any[]> {
		return this.http.get(this.quizUrl + zid + "/question")
			.map(this.extractData)
			.catch(this.handleError);
	}

	getQuestion(qid: number, zid: number): Observable<Question> {
		return this.http.get(this.quizUrl + zid + "/question/" + qid)
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
