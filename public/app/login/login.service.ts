import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private loginUrl = 'http://localhost/quiz/api/login';

	constructor(private http: Http) { }

	postLogin(token: string): Observable<Object> {
		let options = new RequestOptions({ headers: this.headers });
		return this.http.post(this.loginUrl,
				{"token": token},
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
