import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { FirstpagePage } from '../pages/firstpage/firstpage';
import { BilgilendirmePage } from '../pages/bilgilendirme/bilgilendirme';
import { PnrPage } from '../pages/pnr/pnr';
import { GpsEkraniPage } from '../pages/gps-ekrani/gps-ekrani';
import { OneriEkraniPage } from '../pages/oneri-ekrani/oneri-ekrani';
import { TopluMesajPage } from '../pages/toplu-mesaj/toplu-mesaj';

import { ExpandableComponent } from '../components/expandable/expandable';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FirstpagePage,
    PnrPage,
    BilgilendirmePage,
    GpsEkraniPage,
    OneriEkraniPage,
    TopluMesajPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    },
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FirstpagePage,
    PnrPage,
    BilgilendirmePage,
    GpsEkraniPage,
    OneriEkraniPage,
    TopluMesajPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
