import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizzesListPage } from './quizzes-list';

@NgModule({
  declarations: [
    QuizzesListPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizzesListPage),
  ],
})
export class QuizzesListPageModule {}
