<?php

use Phalcon\Mvc\Model;

class Question extends Model {
	public $id;
	public $text;
	public $image;
	public $isActive;
	public $quizId;

	public function initialize() {
		$this->belongsTo("quiz_id", "Quiz", "id");
		$this->hasMany("id", "QuestionChoice", "question_id");
	}
}
