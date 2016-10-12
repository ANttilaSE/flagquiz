System.register(['@angular/core', '@angular/router', '../user-question-choice/user-question-choice.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_question_choice_service_1;
    var QuizResultComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_question_choice_service_1_1) {
                user_question_choice_service_1 = user_question_choice_service_1_1;
            }],
        execute: function() {
            QuizResultComponent = (function () {
                function QuizResultComponent(userQuestionChoiceService, route, router) {
                    this.userQuestionChoiceService = userQuestionChoiceService;
                    this.route = route;
                    this.router = router;
                }
                QuizResultComponent.prototype.ngOnInit = function () { };
                QuizResultComponent.prototype.getResult = function (uid, zid) {
                    var _this = this;
                    this.userQuestionChoiceService.getResultList(uid, zid)
                        .subscribe(function (result) { return _this.result = result; }, function (error) { return _this.errorMessage = error; });
                };
                QuizResultComponent = __decorate([
                    core_1.Component({
                        selector: "my-quiz-result",
                        templateUrl: 'app/quiz-result/quiz-result.component.html',
                        providers: [
                            user_question_choice_service_1.UserQuestionChoiceService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [user_question_choice_service_1.UserQuestionChoiceService, router_1.ActivatedRoute, router_1.Router])
                ], QuizResultComponent);
                return QuizResultComponent;
            }());
            exports_1("QuizResultComponent", QuizResultComponent);
        }
    }
});
//# sourceMappingURL=quiz-result.component.js.map