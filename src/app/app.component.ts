import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstpagePage } from '../pages/firstpage/firstpage';
import * as firebase from 'firebase';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = FirstpagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {
    let config = {
      apiKey: "AIzaSyCCRROvIZzo_O1YyL_y2cxQxiXlUADZCJk",
      authDomain: "gezi-rehberim-6f5f8.firebaseapp.com",
      databaseURL: "https://gezi-rehberim-6f5f8.firebaseio.com",
      projectId: "gezi-rehberim-6f5f8",
      storageBucket: "",
      messagingSenderId: "138324424153"
    };
    firebase.initializeApp(config);
    platform.ready().then(() => {

      statusBar.styleDefault();
      this.pushsetup();
      splashScreen.hide();
    });
  }
  pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '138324424153'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };
 
  const pushObject: PushObject = this.push.init(options);
 
  pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'Gezi Rehberim',
        message: 'Yeni bir mesajınız var!'
      });
      youralert.present();
    }
  });
 
  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
  });
 
  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
}
