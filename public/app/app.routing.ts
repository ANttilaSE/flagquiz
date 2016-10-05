import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizListComponent } 	from './quiz/quiz-list.component';
import { QuizComponent }   		from './quiz/quiz.component';
import { QuestionComponent }   	from './question/question.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/quiz',
		pathMatch: 'full'
	},
	{
		path: 'quiz',
		component: QuizListComponent
	},
	{
		path: 'quiz/:zid',
		component: QuizComponent
	},
	{
		path: 'quiz/:zid/question',
		component: QuestionComponent
	},
	{
		path: 'quiz/:zid/question/:qid',
		component: QuestionComponent
	}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
