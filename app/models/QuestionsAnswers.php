<?php

use Phalcon\Mvc\Model;

class QuestionsAnswers extends Model {
	public $questions_id;
	public $answers_id;
	public $difficulty;

	public function initialize() {
		$this->belongsTo("questions_id", "Questions", "id");
		$this->belongsTo("answers_id", "Answers", "id");
	}
}
