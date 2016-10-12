System.register(['@angular/router', './quiz/quiz-list.component', './quiz/quiz.component', './login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, quiz_list_component_1, quiz_component_1, login_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_list_component_1_1) {
                quiz_list_component_1 = quiz_list_component_1_1;
            },
            function (quiz_component_1_1) {
                quiz_component_1 = quiz_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'quiz',
                    component: quiz_list_component_1.QuizListComponent
                },
                {
                    path: 'quiz/:zid',
                    component: quiz_component_1.QuizComponent
                }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map