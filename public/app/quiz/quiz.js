System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Quiz;
    return {
        setters:[],
        execute: function() {
            Quiz = (function () {
                function Quiz(id, title) {
                    this.id = id;
                    this.title = title;
                }
                return Quiz;
            }());
            exports_1("Quiz", Quiz);
        }
    }
});
//# sourceMappingURL=quiz.js.map