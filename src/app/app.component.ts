import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LessonsPage } from '../pages/lessons/lessons';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { QuizzesListPage } from '../pages/quizzes-list/quizzes-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage:any;
  public pages: Array<{ title:string, component:any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.rootPage = LoginPage;
    this.pages = [
      { title:'Home',component:HomePage, icon:'home'},
      { title:'Lessons',component:LessonsPage, icon:'book'},
      { title:'Quizzes',component:QuizzesListPage, icon:'school'},
      { title:'Contact',component:ContactPage, icon:'mail'},
      { title:'About',component:AboutPage, icon:'information-circle'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
