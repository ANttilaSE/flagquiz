<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class QuestionChoiceController extends Controller {
	# List of choices
	public function indexAction($quizId, $questionId) {
		$choiceList = QuestionChoice::find([
			"question_id = ?1",
			"bind" => [1 => $questionId],
			"columns" => "id, question_id, text"
		]);

		$response = new Response();
		$response->setJsonContent(["data" => $choiceList]);
		$response->send();
	}

	# Answer
	public function answerAction($quizId, $questionId) {
		$request = new Phalcon\Http\Request();
		$input = $request->getJsonRawBody();

		# TODO: Check if quiz+question+choice exist
		$question = Question::findFirst($questionId);
		$questionChoice = QuestionChoice::findFirst($input->id);

		$token = $request->getServer("HTTP_X_TOKEN");
		$userToken = UserToken::findFirst([
			"token = ?1",
			"bind" => [1 => $token]]
		);

		$answer = new UserQuestionChoice();
		$answer->user_id = $userToken->user_id;
		$answer->question_id = $questionId;
		$answer->question_choice_id = $input->id;
		$answer->is_right = $questionChoice->is_correct;

		$response = new Response();
		if ($answer->create() === false) {
			$answer = UserQuestionChoice::findFirst([
				"user_id = ?1 AND question_id = ?2",
				"bind" => [
					1 => 1,
					2 => $questionId
				]
			]);
			$response->setJsonContent([
				"status" => 0,
				"data" => $answer
			]);
		} else {
			$response->setJsonContent(["status" => 1, "data" => $answer]);
		}

		$response->send();
	}
}
