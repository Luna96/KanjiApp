import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KanjiPage } from './kanji';

@NgModule({
  declarations: [
    KanjiPage,
  ],
  imports: [
    IonicPageModule.forChild(KanjiPage),
  ],
})
export class KanjiPageModule {}
