System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserQuestionChoice;
    return {
        setters:[],
        execute: function() {
            UserQuestionChoice = (function () {
                function UserQuestionChoice(user_id, question_id, question_choice_id, is_right, created_at) {
                    this.user_id = user_id;
                    this.question_id = question_id;
                    this.question_choice_id = question_choice_id;
                    this.is_right = !!is_right;
                    this.created_at = created_at;
                }
                return UserQuestionChoice;
            }());
            exports_1("UserQuestionChoice", UserQuestionChoice);
        }
    }
});
//# sourceMappingURL=user-question-choice.js.map