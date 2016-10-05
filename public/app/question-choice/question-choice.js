System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuestionChoice;
    return {
        setters:[],
        execute: function() {
            QuestionChoice = (function () {
                function QuestionChoice(id, question_id, text) {
                    this.id = id;
                    this.question_id = question_id;
                    this.text = text;
                }
                return QuestionChoice;
            }());
            exports_1("QuestionChoice", QuestionChoice);
        }
    }
});
//# sourceMappingURL=question-choice.js.map