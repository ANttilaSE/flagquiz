System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var QuizService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            QuizService = (function () {
                function QuizService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.quizUrl = 'http://localhost/quiz/api/quiz';
                }
                QuizService.prototype.getQuizList = function () {
                    return this.http.get(this.quizUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                QuizService.prototype.getQuiz = function (zid) {
                    return this.http.get(this.quizUrl + "/" + zid)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                QuizService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                QuizService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                QuizService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizService);
                return QuizService;
            }());
            exports_1("QuizService", QuizService);
        }
    }
});
//# sourceMappingURL=quiz.service.js.map