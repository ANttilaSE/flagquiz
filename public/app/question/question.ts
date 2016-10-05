import { QuestionChoice } from '../question-choice/question-choice';

export class Question {
	id: number;
	text: string;
	image: string;
	is_active: number;
	quiz_id: number;
	choices: QuestionChoice[];
	answer: Object;

	constructor (id: number, text: string, image: string, is_active: number, quiz_id: number) {
		this.id = id;
		this.text = text;
		this.image = image;
		this.is_active = is_active;
		this.quiz_id = quiz_id;
	}
}
