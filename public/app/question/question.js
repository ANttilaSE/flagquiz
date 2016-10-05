System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(id, text, image, is_active, quiz_id) {
                    this.id = id;
                    this.text = text;
                    this.image = image;
                    this.is_active = is_active;
                    this.quiz_id = quiz_id;
                }
                return Question;
            }());
            exports_1("Question", Question);
        }
    }
});
//# sourceMappingURL=question.js.map