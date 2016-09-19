<?php

use Phalcon\Loader;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Application;
use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Url as UrlProvider;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;
use Phalcon\Session\Adapter\Files as Session;

try {
	// Register an autoloader
	$loader = new Loader();
	$loader->registerDirs([
		"../app/controllers/",
		"../app/models/"
	])->register();

	// Create a DI
	$di = new FactoryDefault();

	// Setup the view component
	$di->set("view", function () {
		$view = new View();
		$view->setViewsDir("../app/views/");
		$view->registerEngines([
			".volt" => "Phalcon\Mvc\View\Engine\Volt",
			".phtml" => "Phalcon\Mvc\View\Engine\Php"
		]);
		return $view;
	});

	// Setup the database service
	$di->set("db", function () {
		return new DbAdapter([
			"host" 		=> "localhost",
			"username" 	=> "root",
			"password" 	=> "",
			"dbname" 	=> "quiz",
			"options" 	=> [
				PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
			]
		]);
	});

	// Setup a base URI so that all generated URIs include the "game" folder
	$di->set("url", function () {
		$url = new UrlProvider();
		$url->setBaseUri("/quiz/");
		return $url;
	});

	// Start the session the first time when some component request the session service
	$di->setShared("session", function () {
		$session = new Session();
		$session->start();
		return $session;
	});

	$application = new Application($di);

	// Handle the request
	$response = $application->handle();

	$response->send();

} catch (\Exception $e) {
	echo "Exception: ", $e->getMessage();
}
