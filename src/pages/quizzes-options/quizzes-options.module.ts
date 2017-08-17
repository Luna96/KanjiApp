import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizzesOptionsPage } from './quizzes-options';

@NgModule({
  declarations: [
    QuizzesOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizzesOptionsPage),
  ],
})
export class QuizzesOptionsPageModule {}
