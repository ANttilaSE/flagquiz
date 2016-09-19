<nav>
	<?= $this->tag->linkto(['', 'All']) ?>
	<?= $this->tag->linkto(['?m=1&c=4', 'Africa']) ?>
	<?= $this->tag->linkto(['?m=1&c=7', 'Antarctica']) ?>
	<?= $this->tag->linkto(['?m=1&c=2', 'Asia']) ?>
	<?= $this->tag->linkto(['?m=1&c=3', 'Australia']) ?>
	<?= $this->tag->linkto(['?m=1&c=1', 'Europe']) ?>
	<?= $this->tag->linkto(['?m=1&c=5', 'North America']) ?>
	<?= $this->tag->linkto(['?m=1&c=6', 'South America']) ?>
</nav>

<?= $this->tag->image(['img/flags/' . $question->image]) ?>

<?= $this->tag->form(['', 'method' => 'post', 'id' => 'answers']) ?>
	<?= $this->tag->hiddenField(['q', 'value' => $question->id]) ?>
	<?php foreach ($answers as $index => $answer) { ?>
		<div class="padding">
			<button type="submit" name="a" value="<?= $answer->id ?>" class="btn-link"><?= $answer->text ?></button>
		</div>
	<?php } ?>
<?= $this->tag->endForm() ?>

<?php if (isset($lastQuestion)) { ?>
	<?= $lastResult ?>, that was <?= $lastQuestion->Answers->text ?>
	<p>Score: <?= $score ?> out of <?= $total ?>, <?= $score / $total * 100 ?>%</p>
<?php } ?>

<?= $this->tag->form(['reset', 'method' => 'post']) ?>
	<?= $this->tag->submitButton(['Reset']) ?>
<?= $this->tag->endForm() ?>
