import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LessonPage } from "../lesson/lesson";
import { LessonsProvider } from "../../providers/lessons/lessons";

/**
 * Generated class for the LessonsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})
export class LessonsPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private lessonsService: LessonsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsPage');
    this.getLessons();
  }

  itemTapped(event, item) {
    this.navCtrl.push(LessonPage, {
      item: item
    });
  }

  getLessons(){
    this.lessonsService.getLessons().subscribe(data => this.items = data);
  }

}
