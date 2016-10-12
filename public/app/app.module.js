System.register(['@angular/core', '@angular/platform-browser', '@angular/http', './app.routing', './app.component', './quiz/quiz-list.component', './quiz/quiz.component', './quiz/quiz.service', './question/question.service', './question-choice/question-choice.service', './user-question-choice/user-question-choice.service', './login/login.component', './login/login.service', './question/question.component', './quiz-result/quiz-result.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, app_routing_1, app_component_1, quiz_list_component_1, quiz_component_1, quiz_service_1, question_service_1, question_choice_service_1, user_question_choice_service_1, login_component_1, login_service_1, question_component_1, quiz_result_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (quiz_list_component_1_1) {
                quiz_list_component_1 = quiz_list_component_1_1;
            },
            function (quiz_component_1_1) {
                quiz_component_1 = quiz_component_1_1;
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
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (question_component_1_1) {
                question_component_1 = question_component_1_1;
            },
            function (quiz_result_component_1_1) {
                quiz_result_component_1 = quiz_result_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            quiz_list_component_1.QuizListComponent,
                            quiz_component_1.QuizComponent,
                            login_component_1.LoginComponent,
                            question_component_1.QuestionComponent,
                            quiz_result_component_1.QuizResultComponent,
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders,
                            quiz_service_1.QuizService,
                            question_service_1.QuestionService,
                            question_choice_service_1.QuestionChoiceService,
                            user_question_choice_service_1.UserQuestionChoiceService,
                            login_service_1.LoginService,
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map