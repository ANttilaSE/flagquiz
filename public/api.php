<?php

use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\Collection as MicroCollection;
use Phalcon\Loader;
use Phalcon\Session\Adapter\Files as Session;

$config = include __DIR__ . '/../app/config/config.php';

$loader = new Loader();
$loader->registerDirs([
	$config->application->controllersDir,
	$config->application->modelsDir
]);
$loader->register();

$app = new Micro();

$app["db"] = function () use ($config) {
	return new \Phalcon\Db\Adapter\Pdo\Mysql($config->database->toArray());
};

$app["session"] = function () {
	$session = new Session();
	$session->start();

	return $session;
};

$quiz = new MicroCollection();
$quiz->setHandler(new QuizController());
$quiz->setPrefix("/api/quiz");
$quiz->get("/", "indexAction");
$quiz->get("/{id}", "getAction");
$app->mount($quiz);

$question = new MicroCollection();
$question->setHandler(new QuestionController());
$question->setPrefix("/api/quiz/{quizId}/question");
$question->get("/", "indexAction");
$question->get("/{id}", "getAction");
$app->mount($question);

$question = new MicroCollection();
$question->setHandler(new QuestionChoiceController());
$question->setPrefix("/api/quiz/{quizId}/question/{questionId}");
$question->get("/choice", "indexAction");
$question->post("/answer", "answerAction");
$app->mount($question);

$userQuestion = new MicroCollection();
$userQuestion->setHandler(new UserQuestionChoiceController());
$userQuestion->setPrefix("/api/user/{userId}/quiz/{quizId}");
$userQuestion->get("/", "resultAction");
$app->mount($userQuestion);

$app->notFound(function () use ($app) {
	$app->response->setStatusCode(404, "Not Found");
	$app->response->sendHeaders();

	echo "This is crazy, but this page was not found!";
});

$app->handle();
