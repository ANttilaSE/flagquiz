<?php

use Phalcon\Mvc\Controller;

class ResetController extends Controller {
	public function indexAction() {
		$this->session->destroy();

		$response = new \Phalcon\Http\Response();
		$response->redirect();

		return $response;
	}
}
