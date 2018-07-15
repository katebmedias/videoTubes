import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VisitedPage } from '../pages/visited/visited';
import { LikedPage } from '../pages/liked/liked';
import { VideoItem } from '../components/video-item/video-item.component';
import { DetailPage } from '../pages/detail/detail';
import { HeaderNav } from '../components/header/header.component';

@NgModule({
  declarations: [
    MyApp,
    VisitedPage,
    LikedPage,
    HomePage,
    DetailPage,
    TabsPage,
    VideoItem,
    HeaderNav
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VisitedPage,
    LikedPage,
    HomePage,
    TabsPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
