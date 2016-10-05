<?php

use Phalcon\Mvc\Model;

class UserQuestionAnswer extends Model {
	public $userId;
	public $questionId;
	public $questionChoiceId;
	public $isRight;
	public $createdAt;

	public function initialize() {
		$this->belongsTo("user_id", "User", "id");
		$this->belongsTo("question_id", "Question", "id");
		$this->belongsTo("question_choice_id", "QuestionChoice", "id");
	}
}
