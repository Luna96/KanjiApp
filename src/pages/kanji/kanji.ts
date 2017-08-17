import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KanjiProvider } from "../../providers/kanji/kanji";

/**
 * Generated class for the KanjiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-kanji',
  templateUrl: 'kanji.html',
})
export class KanjiPage {
  selectedItem: any;
  kanji: any;
  @ViewChild('videoPlayer')  videoplayer: any;
  @ViewChild('audioPlayer')  audioplayer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private kanjiService: KanjiProvider) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
    this.getKanji()
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KanjiPage');
    //this.getKanji();
  }

  getKanji(){
    this.kanjiService.getKanji(this.selectedItem.kanji).subscribe(data => this.kanji = data);
  }

  asdf(){
    console.log(this.kanji)
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  
  toggleAudio(event: any) {
    this.audioplayer.nativeElement.play();
  }
}
