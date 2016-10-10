<?php

use Phalcon\Mvc\Model;

class User extends Model {
	public $id;
	public $email;
	public $username;
	public $password;
	public $created_at;
	public $facebook_id;

	public function initialize() {}
}
