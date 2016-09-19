<?php

use Phalcon\Mvc\Model;

class Answers extends Model {
	public $id;
	public $text;

	public function initialize() {
		$this->hasManyToMany(
			"id",
			"Answers",
			"answers_id", "questions_id",
			"QuestionsAnswers",
			"id"
		);
	}
}
