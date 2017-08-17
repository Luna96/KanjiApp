import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { LoginPage } from '../pages/login/login';
import { LessonsPage } from '../pages/lessons/lessons';
import { LessonPage } from '../pages/lesson/lesson';
import { KanjiPage } from '../pages/kanji/kanji';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LessonsProvider } from '../providers/lessons/lessons';
import { KanjiProvider } from '../providers/kanji/kanji';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    LessonsPage,
    LessonPage,
    KanjiPage,
    ContactPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LoginPage,
    LessonsPage,
    LessonPage,
    KanjiPage,
    ContactPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LessonsProvider,
    KanjiProvider
  ]
})
export class AppModule {}
