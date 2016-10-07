import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { UserQuestionChoice } from './user-question-choice';

@Injectable()
export class UserQuestionChoiceService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private userUrl = 'http://localhost/quiz/api/user/';

	constructor(private http: Http) { }

	getResultList(uid: number, zid: number): Observable<UserQuestionChoice[]> {
		return this.http.get(this.userUrl + uid + "/quiz/" + zid)
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
