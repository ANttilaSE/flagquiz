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
    var QuestionChoiceService;
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
            QuestionChoiceService = (function () {
                function QuestionChoiceService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', "X-token": localStorage.getItem("auth-token") });
                    this.quizUrl = 'http://anttila.hopto.org/api/quiz/';
                }
                QuestionChoiceService.prototype.getQuestionChoiceList = function (qid, zid) {
                    return this.http.get(this.quizUrl + zid + "/question/" + qid + "/choice")
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                QuestionChoiceService.prototype.postAnswer = function (cid, qid, zid) {
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post(this.quizUrl + zid + "/question/" + qid + "/answer", { "id": cid }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                QuestionChoiceService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                QuestionChoiceService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                QuestionChoiceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuestionChoiceService);
                return QuestionChoiceService;
            }());
            exports_1("QuestionChoiceService", QuestionChoiceService);
        }
    }
});
//# sourceMappingURL=question-choice.service.js.map