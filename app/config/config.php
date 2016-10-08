<?php

return new \Phalcon\Config([
	"database" => [
		"adapter" 	=> "mysql",
		"host" 		=> "localhost",
		"username" 	=> "root",
		"password" 	=> "",
		"dbname" 	=> "quiz",
	],
	"application" => [
		"modelsDir" 		=> __DIR__ . "/../models/",
		"controllersDir" 	=> __DIR__ . "/../controllers/",
	]
]);
