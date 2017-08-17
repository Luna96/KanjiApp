import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizzPage } from './quizz';
import { FlashCardComponent } from '../../components/flash-card/flash-card';

@NgModule({
  declarations: [
    QuizzPage,
    FlashCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(QuizzPage)
  ],
})
export class QuizzPageModule {}
