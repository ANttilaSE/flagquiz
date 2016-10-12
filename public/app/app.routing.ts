import { ModuleWithProviders } 	from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizListComponent } 	from './quiz/quiz-list.component';
import { QuizComponent } 		from './quiz/quiz.component';
import { LoginComponent } 		from './login/login.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'quiz',
		component: QuizListComponent
	},
	{
		path: 'quiz/:zid',
		component: QuizComponent
	}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
