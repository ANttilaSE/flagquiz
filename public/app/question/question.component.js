System.register(['@angular/core', '@angular/router', './question.service', '../question-choice/question-choice.service'], function(exports_1, context_1) {
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
    var core_1, router_1, question_service_1, question_choice_service_1;
    var QuestionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (question_choice_service_1_1) {
                question_choice_service_1 = question_choice_service_1_1;
            }],
        execute: function() {
            QuestionComponent = (function () {
                function QuestionComponent(questionService, route, router, questionChoiceService) {
                    this.questionService = questionService;
                    this.route = route;
                    this.router = router;
                    this.questionChoiceService = questionChoiceService;
                    this.started = false;
                }
                QuestionComponent.prototype.ngOnInit = function () { };
                QuestionComponent.prototype.start = function () {
                    var zid = +this.route.snapshot.params['zid'];
                    this.getQuestionList(zid);
                    this.started = true;
                };
                QuestionComponent.prototype.answer = function (cid) {
                    this.postAnswer(cid, this.question.id, this.question.quiz_id);
                };
                QuestionComponent.prototype.getQuestionList = function (zid) {
                    var _this = this;
                    this.questionService.getQuestionList(zid)
                        .subscribe(function (questionList) { return _this.questionList = questionList; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getQuestion(_this.questionList.shift().id, zid); });
                };
                QuestionComponent.prototype.getQuestion = function (qid, zid) {
                    var _this = this;
                    this.questionService.getQuestion(qid, zid)
                        .subscribe(function (question) { return _this.question = question; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getQuestionChoiceList(qid, zid); });
                };
                QuestionComponent.prototype.getQuestionChoiceList = function (qid, zid) {
                    var _this = this;
                    this.questionChoiceService.getQuestionChoiceList(qid, zid)
                        .subscribe(function (question) { return _this.question.choices = question; }, function (error) { return _this.errorMessage = error; });
                };
                QuestionComponent.prototype.postAnswer = function (cid, qid, zid) {
                    var _this = this;
                    if (this.questionList.length > 0) {
                        var nextQId_1 = this.questionList.shift();
                        this.questionChoiceService.postAnswer(cid, qid, zid)
                            .subscribe(function (answer) { return _this.question.answer = answer; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getQuestion(nextQId_1.id, zid); });
                    }
                    else {
                        var uid_1 = +localStorage.getItem("uid");
                        this.questionChoiceService.postAnswer(cid, qid, zid)
                            .subscribe(function (answer) { return _this.question.answer = answer; }, function (error) { return _this.errorMessage = error; }, function () {
                            _this.question = void 0; //unset question
                            _this.result.getResult(uid_1, zid);
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], QuestionComponent.prototype, "result", void 0);
                QuestionComponent = __decorate([
                    core_1.Component({
                        selector: "my-quiz-question",
                        templateUrl: 'app/question/question.component.html',
                        providers: [
                            question_service_1.QuestionService
                        ]
                    }), 
                    __metadata('design:paramtypes', [question_service_1.QuestionService, router_1.ActivatedRoute, router_1.Router, question_choice_service_1.QuestionChoiceService])
                ], QuestionComponent);
                return QuestionComponent;
            }());
            exports_1("QuestionComponent", QuestionComponent);
        }
    }
});
//# sourceMappingURL=question.component.js.map