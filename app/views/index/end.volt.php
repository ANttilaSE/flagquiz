<?php if (isset($lastQuestion)) { ?>
	<?php if ($lastQuestion->Answers->id == $lastAnswerId) { ?>
		Correct
	<?php } else { ?>
		Wrong
	<?php } ?>

	<?php if (!$difficulty) { ?>
		, that was <?= $lastQuestion->Answers->text ?>
	<?php } ?>
<?php } ?>

No more questions.

<p>Score: <?= $score ?> out of <?= $total ?>, <?= $score / $total * 100 ?>%</p>

<?= $this->tag->form(['reset', 'method' => 'post']) ?>
	<?= $this->tag->submitButton(['Reset']) ?>
<?= $this->tag->endForm() ?>
