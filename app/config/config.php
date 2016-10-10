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
		"librariesDir" 		=> __DIR__ . "/../libraries/",
	],
	"facebook" => [
		"appId" => "909469269184505",
		"secret" => "57de315a5604a982db5cbe882acf2858"
	]
]);
