<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class QuizController extends Controller {
	# List of quizzes
	public function indexAction() {
		$quizList = Quiz::find();

		$response = new Response();
		$response->setJsonContent(["data" => $quizList]);
		$response->send();
	}

	# Quiz
	public function getAction($id) {
		$quiz = Quiz::findFirst($id);

		$response = new Response();
		$response->setJsonContent(["data" => $quiz]);
		$response->send();
	}
}
