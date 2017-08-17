import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnyomiQuizzPage } from './onyomi-quizz';

@NgModule({
  declarations: [
    OnyomiQuizzPage,
  ],
  imports: [
    IonicPageModule.forChild(OnyomiQuizzPage),
  ],
})
export class OnyomiQuizzPageModule {}
