import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PnrPage } from '../pnr/pnr';

@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(private navCtrl: NavController) { }

  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  goToPnrPage() {
    this.navCtrl.push(PnrPage);
  }


}
