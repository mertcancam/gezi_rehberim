import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the OneriEkraniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oneri-ekrani',
  templateUrl: 'oneri-ekrani.html',
})
export class OneriEkraniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert:AlertController) {
  }
  onay(){
    let alert = this.alert.create({
      title:'Gezi Rehberim',
      message:'Yorumunuz alındı. Çok teşekkür ederiz!',
      buttons: ['Geri Dön']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OneriEkraniPage');
  }

}
