import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-pnr',
  templateUrl: 'pnr.html',
})
export class PnrPage {

  constructor(private navCtrl: NavController) { }

  goHome() {
    this.navCtrl.push(TabsPage);
  }

}
