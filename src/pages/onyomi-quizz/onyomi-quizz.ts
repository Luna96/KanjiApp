import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnyomiDataProvider } from "../../providers/onyomi-data/onyomi-data";

/**
 * Generated class for the OnyomiQuizzPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onyomi-quizz',
  templateUrl: 'onyomi-quizz.html',
})
export class OnyomiQuizzPage {
  @ViewChild('slides') slides: any;
  
  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private onyomiService: OnyomiDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnyomiQuizzPage');
    this.slides.lockSwipes(true);
    this.onyomiService.load().then((data) => {
        data.map((question) => {
            let originalOrder = question.answers;
            question.answers = this.randomizeAnswers(originalOrder);
            return question;
        });     

        this.questions = data;

    });
  }

  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question){
    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;

    if(answer.correct){
        this.score++;
    }

    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 3000);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {
    for (let i = rawAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = rawAnswers[i];
        rawAnswers[i] = rawAnswers[j];
        rawAnswers[j] = temp;
    }

    return rawAnswers;
  }
    
  restartQuiz() {
      this.score = 0;
      this.slides.lockSwipes(false);
      this.slides.slideTo(1, 1000);
      this.slides.lockSwipes(true);
  }

}
