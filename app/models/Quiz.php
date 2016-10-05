<?php

use Phalcon\Mvc\Model;

class Quiz extends Model {
	public $id;
	public $title;

	public function initialize() {
		$this->hasMany("id", "Question", "quiz_id");
	}
}
