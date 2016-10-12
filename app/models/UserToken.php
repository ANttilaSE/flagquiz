<?php

use Phalcon\Mvc\Model;

class UserToken extends Model {
	public $id;
	public $user_id;
	public $token;
	public $created_at;

	public function initialize() {
		$this->belongsTo("user_id", "User", "id");
	}
}
