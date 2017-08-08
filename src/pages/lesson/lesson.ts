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
  kanjis: Array<{name: string, kanji: string,}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.kanjis = [
      { name:'Day/Sun',kanji:'日'},
      { name:'Month/Moon',kanji:'月'},
      { name:'Tree',kanji:'木'},
      { name:'Day/Sun',kanji:'日'},
    ];
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
