<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class UserQuestionChoiceController extends Controller {
	# Result
	public function resultAction($userId, $quizId) {
		$quiz = Quiz::findFirst($quizId);
		$total = $quiz->Question->count();

		$correct = $this->modelsManager->executeQuery(
		"	SELECT COUNT(a.user_id) AS correct FROM Question AS q
			RIGHT JOIN QuestionChoice AS c
				ON c.question_id = q.id
			RIGHT JOIN UserQuestionChoice AS a
				ON a.question_choice_id = c.id AND a.user_id = $userId AND a.is_right = '1'
			WHERE q.quiz_id = $quizId
		")->getFirst();

		$response = new Response();
		$response->setJsonContent(["data" => ["correct" => (int) $correct->correct, "total" => $total]]);
		$response->send();
	}
}
