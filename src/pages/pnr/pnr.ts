import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { MyService } from '../../services/services'

@Component({
  selector: 'page-pnr',
  templateUrl: 'pnr.html',
})
export class PnrPage {

  public items: Array<any> = [];
  pnr_no;
  public exportPnr: string = '';

  constructor(private navCtrl: NavController, public myService: MyService, public http: HttpClient, private alertCtrl: AlertController) { }

  ionViewWillEnter(): void {
    this.load();

  }

  load(): void {
    this.http
      .get('http://www.emrekaragoz.com/gezirehberi/public_html/ionic/retrieve-data.php')
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
        (error: any) => {
          console.dir(error);
        });
  }

  goHome() {
    //console.log(this.pnr_no);
    //console.log(this.items);

    let pnr_numbers: Array<any> = [];
    for (let item of this.items) {
      pnr_numbers.push(item.PNR_no);
    }

    for (let eachPnr of pnr_numbers) {

      if (this.pnr_no == eachPnr) {
        this.myService.addToPnrNumber(eachPnr);
        //console.log(this.exportPnr);
        this.navCtrl.push(TabsPage);
        return;
      }
    }

    let alert = this.alertCtrl.create({
      title: 'Yanlış PNR Numarası Girdiniz'
    });
    alert.present();



  }

}
