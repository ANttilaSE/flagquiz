<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class UserQuestionChoiceController extends Controller {
	# Result
	public function resultAction($userId, $quizId) {
		$answerList = $this->modelsManager->executeQuery(
		"	SELECT a.* FROM Question AS q
			RIGHT JOIN QuestionChoice AS c
				ON c.question_id = q.id
			RIGHT JOIN UserQuestionChoice AS a
				ON a.question_choice_id = c.id AND a.user_id = $userId
			WHERE q.quiz_id = $quizId
		");

		$response = new Response();
		$response->setJsonContent(["data" => $answerList]);
		$response->send();
	}
}
