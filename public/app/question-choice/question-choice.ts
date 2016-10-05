export class QuestionChoice {
	id: number;
	question_id: number;
	text: string;

	constructor (id: number, question_id: number, text: string) {
		this.id = id;
		this.question_id = question_id;
		this.text = text;
	}
}
