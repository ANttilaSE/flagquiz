<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class LoginController extends Controller {
	public function indexAction() {
		$request = new Phalcon\Http\Request();
		$input = $request->getJsonRawBody();

		$fb = new \Facebook\Facebook([
			"app_id" => $this->config->get("facebook")->appId,
			"app_secret" => $this->config->get("facebook")->secret,
			"default_graph_version" => "v2.8",
		]);

		$msg = [];
		try {
			$response = $fb->get("/me?fields=email,name", $input->token);
		} catch(\Facebook\Exceptions\FacebookResponseException $e) {
			$msg[] = "Graph returned an error: " . $e->getMessage();
		} catch(\Facebook\Exceptions\FacebookSDKException $e) {
			$msg[] = "Facebook SDK returned an error: " . $e->getMessage();
		}

		if (!$msg) {
			$me = $response->getGraphUser();
			$fbId = $me->getId();
			$fbEmail = $me->getEmail();
			$fbName = $me->getName();

			$user = User::findFirst("facebook_id = $fbId");
			if (!$user) {
				$user = new User();
				$user->email = $fbEmail;
				$user->username = str_replace(" ", "", $fbName);
				$user->facebook_id = $fbId;
				$user->create();
			}
		}

		$response = new Response();
		$response->setJsonContent(["data" => @$user, "msg" => $msg]);
		$response->send();
	}
}
