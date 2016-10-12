import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { FacebookService,
	FacebookLoginResponse,
	FacebookInitParams } 	from 'ng2-facebook-sdk/dist/index';
import { LoginService } 	from './login.service';

@Component({
	templateUrl: 'app/login/login.component.html',
	providers: [
		FacebookService,
		LoginService
	]
})
export class LoginComponent implements OnInit {
	errorMessage: string;
	status: number = 0;

	constructor (
		public router: Router,
		private fb: FacebookService,
		private loginService: LoginService
	) {}

	ngOnInit(): void {}

	login(): void {
		this.fb.login({scope: "email,public_profile"}).then(
			(response: FacebookLoginResponse) => {
				this.status = 2;
				this.postLogin(response.authResponse.accessToken);
			},
			(error: any) => {
				this.status = 1;
				console.log(error);
			}
		);
	}

	postLogin(token: string): void {
		this.loginService.postLogin(token)
			.subscribe(
				(response) => {
					if (response.token) {
						localStorage.setItem("auth-token", response.token);
						localStorage.setItem("uid", response.uid);
						this.router.navigateByUrl('/quiz');
					} else {
						this.status = 1;
						this.errorMessage = "token not valid";
					}
				},
				error => this.errorMessage = <any>error
			);
	}
}
