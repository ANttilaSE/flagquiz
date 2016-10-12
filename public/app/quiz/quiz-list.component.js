System.register(['@angular/core', './quiz.service'], function(exports_1, context_1) {
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
    var core_1, quiz_service_1;
    var QuizListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quiz_service_1_1) {
                quiz_service_1 = quiz_service_1_1;
            }],
        execute: function() {
            QuizListComponent = (function () {
                function QuizListComponent(quizService) {
                    this.quizService = quizService;
                }
                QuizListComponent.prototype.ngOnInit = function () {
                    this.getQuizList();
                };
                QuizListComponent.prototype.getQuizList = function () {
                    var _this = this;
                    this.quizService.getQuizList()
                        .subscribe(function (quizList) { return _this.quizList = quizList; }, function (error) { return _this.errorMessage = error; });
                };
                QuizListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/quiz/quiz-list.component.html',
                        providers: [
                            quiz_service_1.QuizService
                        ]
                    }), 
                    __metadata('design:paramtypes', [quiz_service_1.QuizService])
                ], QuizListComponent);
                return QuizListComponent;
            }());
            exports_1("QuizListComponent", QuizListComponent);
        }
    }
});
//# sourceMappingURL=quiz-list.component.js.map