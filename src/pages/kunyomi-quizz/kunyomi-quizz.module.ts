import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KunyomiQuizzPage } from './kunyomi-quizz';

@NgModule({
  declarations: [
    KunyomiQuizzPage,
  ],
  imports: [
    IonicPageModule.forChild(KunyomiQuizzPage),
  ],
})
export class KunyomiQuizzPageModule {}
