export class UserQuestionChoice {
	user_id: number;
	question_id: number;
	question_choice_id: number;
	is_right: number;
	created_at: number;

	constructor (user_id: number, question_id: number, question_choice_id: number, is_right: number, created_at: number) {
		this.user_id = user_id;
		this.question_id = question_id;
		this.question_choice_id = question_choice_id;
		this.is_right = is_right;
		this.created_at = created_at;
	}
}
