import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TopluMesajPage } from '../toplu-mesaj/toplu-mesaj';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController) { }

  goHome() {
    this.navCtrl.push(TopluMesajPage);
  }

}
