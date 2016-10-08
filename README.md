# flagquiz
A quiz with flags.

# Requirements
- PHP >= 7
- MySQL >= 5.6
- Phalcon >= 3 https://phalconphp.com/en/
- NPM >= 3

# API
* Quiz
  * GET /api/quiz
  * GET /api/quiz/#

* Question
  * GET /api/quiz/#/question
  * GET /api/quiz/#/question/#

* QuestionChoice
  * GET /api/quiz/#/question/#/choice
  * POST /api/quiz/#/question/#/answer

* Result
  * GET /api/user/#/quiz/#
