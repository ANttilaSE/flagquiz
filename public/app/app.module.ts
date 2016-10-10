import { NgModule } 		from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { HttpModule } 		from '@angular/http';
import { routing,
	appRoutingProviders } 	from './app.routing';

import { AppComponent } 				from './app.component';
import { QuizListComponent } 			from './quiz/quiz-list.component';
import { QuizComponent } 				from './quiz/quiz.component';
import { QuizService } 					from './quiz/quiz.service';
import { QuestionComponent } 			from './question/question.component';
import { QuestionService } 				from './question/question.service';
import { QuestionChoiceService } 		from './question-choice/question-choice.service';
import { UserQuestionChoiceService } 	from './user-question-choice/user-question-choice.service';
import { LoginService } 				from './login/login.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	declarations: [
		AppComponent,
		QuizListComponent,
		QuizComponent,
		QuestionComponent,
	],
	providers: [
		appRoutingProviders,
		QuizService,
		QuestionService,
		QuestionChoiceService,
		UserQuestionChoiceService,
		LoginService,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
