<?php

use Phalcon\Mvc\Model;

class QuestionChoice extends Model {
	public $id;
	public $questionId;
	public $text;
	public $isCorrect;

	public function initialize() {
		$this->belongsTo("question_id", "Question", "id");
	}
}
