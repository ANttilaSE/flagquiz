<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class QuestionController extends Controller {
	# List questions of quiz
	public function indexAction($quizId) {
		$questionList = Question::find(["quiz_id = " . $quizId, "columns" => "id"]);

		$response = new Response();
		$response->setJsonContent(["data" => $questionList]);
		$response->send();
	}

	public function getAction($quizId, $id) {
		$question = Question::findFirst($id);

		$response = new Response();
		$response->setJsonContent(["data" => $question]);
		$response->send();
	}
}
