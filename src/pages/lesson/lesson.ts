import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KanjiPage } from "../kanji/kanji";

/**
 * Generated class for the LessonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})

export class LessonPage {
  selectedItem: any;
  kanjis: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.kanjis = this.selectedItem.kanjis;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(KanjiPage, {
      item: item
    });
  }

}
