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
import { QuizzesListPage } from "../pages/quizzes-list/quizzes-list";
import { QuizzPage } from '../pages/quizz/quizz';
import { KunyomiQuizzPage } from '../pages/kunyomi-quizz/kunyomi-quizz';
import { OnyomiQuizzPage } from '../pages/onyomi-quizz/onyomi-quizz';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LessonsProvider } from '../providers/lessons/lessons';
import { KanjiProvider } from '../providers/kanji/kanji';
import { QuizzDataProvider } from '../providers/quizz-data/quizz-data';
import { OnyomiDataProvider } from '../providers/onyomi-data/onyomi-data';
import { KunyomiDataProvider } from '../providers/kunyomi-data/kunyomi-data';
import { FlashCardComponent } from "../components/flash-card/flash-card";
import { LessonsquizzProvider } from '../providers/lessonsquizz/lessonsquizz';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    LessonsPage,
    LessonPage,
    KanjiPage,
    ContactPage,
    AboutPage,
    QuizzesListPage
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
    AboutPage,
    QuizzesListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LessonsProvider,
    KanjiProvider,
    QuizzDataProvider,
    OnyomiDataProvider,
    KunyomiDataProvider,
    LessonsquizzProvider,
  ]
})
export class AppModule {}
