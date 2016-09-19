<?php

use Phalcon\Mvc\Model;

class Questions extends Model {
	public $id;
	public $text;
	public $image;
	public $answerId;

	public function initialize() {
		$this->belongsTo("answer_id", "Answers", "id");
		$this->hasManyToMany(
			"id",
			"QuestionsAnswers",
			"questions_id", "answers_id",
			"Answers",
			"id",
			["alias" => "incorrectAnswers"]
		);
	}
}
