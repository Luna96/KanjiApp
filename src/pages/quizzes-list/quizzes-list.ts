import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LessonsquizzProvider } from "../../providers/lessonsquizz/lessonsquizz";

/**
 * Generated class for the QuizzesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzes-list',
  templateUrl: 'quizzes-list.html',
})
export class QuizzesListPage {
  
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private lessonsService: LessonsquizzProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzesListPage');
    this.getLessons();
  }

  itemTapped(event, item) {
    this.navCtrl.push('QuizzesOptionsPage', {
      item: item
    });
  }

  getLessons(){
    this.lessonsService.getLessons().subscribe(data => this.items = data);
  }

}
