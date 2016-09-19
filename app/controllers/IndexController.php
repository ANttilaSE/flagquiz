<?php

use Phalcon\Mvc\Controller;

class IndexController extends Controller {
	public function indexAction() {
		$mode = $this->request->hasQuery("m")? intval($this->request->getQuery("m")): 0; # 0: all, 1: by continent
		$continent = $this->request->hasQuery("c")? intval($this->request->getQuery("c")): 0;

		# Session init/reset
		if (!$this->session->has("score_{$mode}_{$continent}") ||
			!$this->session->has("total_{$mode}_{$continent}") ||
			!$this->session->has("answered_{$mode}_{$continent}")) {

			$this->session->set("score_{$mode}_{$continent}", 0);
			$this->session->set("total_{$mode}_{$continent}", 0);
			$this->session->set("answered_{$mode}_{$continent}", []);
		}

		# Last question
		if ($this->request->isPost()) {
			$lastQuestionId = $this->request->getPost("q");
			$lastAnswerId 	= $this->request->getPost("a");
			$lastQuestion 	= Questions::findFirst($lastQuestionId);

			if ($lastQuestion->Answers->id == $lastAnswerId)
				$this->session->set("score_$mode", $this->session->get("score_$mode") + 1);
			$this->session->set("total_$mode", $this->session->get("total_$mode") + 1);
			$this->session->set("answered_$mode",
				array_merge([$lastQuestion->Answers->id],
				(array) $this->session->get("answered_$mode")));

			$this->view->lastQuestion = $lastQuestion;
			$this->view->lastAnswerId = $lastAnswerId;

			$this->view->lastResult = ($lastQuestion->Answers->id == $lastAnswerId);
		}

		# Get random question
		switch ($mode) {
			case 1: # by continent
				$continent = intval($this->request->getQuery("c"));
				$questions = Questions::find([
					"id NOT IN ({past:array})",
					"bind" => [
						"past" => $this->session->get("answered_$mode")? : [0]
					],
					"order" => "RAND()"
				])->filter(function ($q) use ($continent) {
					if ($q->Answers->continent_id == $continent) {
						return $q;
					}
				});
				$question = array_shift($questions);
			break;

			default:
				$question = Questions::findFirst([
					"id NOT IN ({past:array})",
					"bind" => [
						"past" => $this->session->get("answered_$mode")? : [0]
					],
					"order" => "RAND()"
				]);
		}

		if ($question) {
			# Get 3 incorrect answers
			switch ($mode) {
				case 2:
					$answerResult = Answers::find([
						"id != {$question->Answers->id} AND continent_id = {$question->Answers->continent_id}",
						"limit" => 3,
						"order" => "RAND()"
					]);
				break;
				default:
					$answerResult = Answers::find([
						"id != {$question->Answers->id}",
						"limit" => 3,
						"order" => "RAND()"
					]);
				break;
			}

			# Add the correct and incorrect answers together and scramble them
			$answers = [$question->Answers];
			foreach ($answerResult as $answer)
				$answers[] = $answer;
			shuffle($answers);

			$this->view->question 	= $question;
			$this->view->answers 	= $answers;
		}
		else {
			$this->view->pick("index/end");
		}

		$this->view->score 	= $this->session->get("score_$mode");
		$this->view->total 	= $this->session->get("total_$mode");
	}
}
