System.register(['@angular/core', '@angular/router', './quiz.service', '../question/question.service', '../question-choice/question-choice.service', '../user-question-choice/user-question-choice.service'], function(exports_1, context_1) {
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
    var core_1, router_1, quiz_service_1, question_service_1, question_choice_service_1, user_question_choice_service_1;
    var QuizComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_service_1_1) {
                quiz_service_1 = quiz_service_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (question_choice_service_1_1) {
                question_choice_service_1 = question_choice_service_1_1;
            },
            function (user_question_choice_service_1_1) {
                user_question_choice_service_1 = user_question_choice_service_1_1;
            }],
        execute: function() {
            QuizComponent = (function () {
                function QuizComponent(quizService, questionService, questionChoiceService, userQuestionChoiceService, route, router) {
                    this.quizService = quizService;
                    this.questionService = questionService;
                    this.questionChoiceService = questionChoiceService;
                    this.userQuestionChoiceService = userQuestionChoiceService;
                    this.route = route;
                    this.router = router;
                }
                QuizComponent.prototype.ngOnInit = function () {
                    var zid = +this.route.snapshot.params['zid'];
                    this.getQuiz(zid);
                };
                QuizComponent.prototype.start = function () {
                    var zid = +this.route.snapshot.params['zid'];
                    this.getQuestionList(zid);
                };
                QuizComponent.prototype.answer = function (cid) {
                    this.postAnswer(cid, this.question.id, this.question.quiz_id);
                };
                QuizComponent.prototype.getQuiz = function (zid) {
                    var _this = this;
                    this.quizService.getQuiz(zid)
                        .subscribe(function (quiz) { return _this.quiz = quiz; }, function (error) { return _this.errorMessage = error; });
                };
                QuizComponent.prototype.getQuestionList = function (zid) {
                    var _this = this;
                    this.questionService.getQuestionList(zid)
                        .subscribe(function (questionList) { return _this.questionList = questionList; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getQuestion(_this.questionList.shift().id, zid); });
                };
                QuizComponent.prototype.getQuestion = function (qid, zid) {
                    var _this = this;
                    this.questionService.getQuestion(qid, zid)
                        .subscribe(function (question) { return _this.question = question; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getQuestionChoiceList(qid, zid); });
                };
                QuizComponent.prototype.getQuestionChoiceList = function (qid, zid) {
                    var _this = this;
                    this.questionChoiceService.getQuestionChoiceList(qid, zid)
                        .subscribe(function (question) { return _this.question.choices = question; }, function (error) { return _this.errorMessage = error; });
                };
                QuizComponent.prototype.postAnswer = function (cid, qid, zid) {
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
                            _this.question = void 0;
                            _this.getResult(uid_1, zid);
                        });
                    }
                };
                QuizComponent.prototype.getResult = function (uid, zid) {
                    var _this = this;
                    this.userQuestionChoiceService.getResultList(uid, zid)
                        .subscribe(function (result) { return _this.result = result; }, function (error) { return _this.errorMessage = error; });
                };
                QuizComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/quiz/quiz.component.html',
                        providers: [
                            quiz_service_1.QuizService,
                            question_service_1.QuestionService,
                            question_choice_service_1.QuestionChoiceService,
                            user_question_choice_service_1.UserQuestionChoiceService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [quiz_service_1.QuizService, question_service_1.QuestionService, question_choice_service_1.QuestionChoiceService, user_question_choice_service_1.UserQuestionChoiceService, router_1.ActivatedRoute, router_1.Router])
                ], QuizComponent);
                return QuizComponent;
            }());
            exports_1("QuizComponent", QuizComponent);
        }
    }
});
//# sourceMappingURL=quiz.component.js.map