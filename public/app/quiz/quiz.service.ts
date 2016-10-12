import { Injectable } 	from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } 	from 'rxjs/Observable';

import { Quiz } 		from './quiz';

@Injectable()
export class QuizService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private quizUrl = 'http://anttila.hopto.org/api/quiz';

	constructor(private http: Http) { }

	getQuizList(): Observable<Quiz[]> {
		return this.http.get(this.quizUrl, {
				headers: this.headers
			})
			.map(this.extractData)
			.catch(this.handleError);
	}

	getQuiz(zid: number): Observable<Quiz> {
		return this.http.get(this.quizUrl + "/" + zid)
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
