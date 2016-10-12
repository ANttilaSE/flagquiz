System.register(['@angular/core', '@angular/router', 'ng2-facebook-sdk/dist/index', './login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, fb, loginService) {
                    this.router = router;
                    this.fb = fb;
                    this.loginService = loginService;
                    this.status = 0;
                }
                LoginComponent.prototype.ngOnInit = function () { };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.fb.login({ scope: "email,public_profile" }).then(function (response) {
                        _this.status = 2;
                        _this.postLogin(response.authResponse.accessToken);
                    }, function (error) {
                        _this.status = 1;
                        console.log(error);
                    });
                };
                LoginComponent.prototype.postLogin = function (token) {
                    var _this = this;
                    this.loginService.postLogin(token)
                        .subscribe(function (response) {
                        if (response.token) {
                            localStorage.setItem("auth-token", response.token);
                            localStorage.setItem("uid", response.uid);
                            _this.router.navigateByUrl('/quiz');
                        }
                        else {
                            _this.status = 1;
                            _this.errorMessage = "token not valid";
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/login/login.component.html',
                        providers: [
                            index_1.FacebookService,
                            login_service_1.LoginService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, index_1.FacebookService, login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map