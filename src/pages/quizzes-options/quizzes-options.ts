import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizzesOptionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzes-options',
  templateUrl: 'quizzes-options.html',
})
export class QuizzesOptionsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzesOptionsPage');
  }

  openQuizz(event, item, id: number) {
    this.navCtrl.push('QuizzPage')
  }

  openOnyomiQuizz(event, item, id: number) {
    this.navCtrl.push('OnyomiQuizzPage')
  }

  openKunyomiQuizz(event, item, id: number) {
    this.navCtrl.push('KunyomiQuizzPage')
  }


}
