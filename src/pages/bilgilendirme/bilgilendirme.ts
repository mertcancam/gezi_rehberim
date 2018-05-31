import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

//import { PnrPage } from '../pnr/pnr';


import { MyService } from '../../services/services'


@Component({
  selector: 'page-bilgilendirme',
  templateUrl: 'bilgilendirme.html'
})
export class BilgilendirmePage {

  public items: Array<any> = [];
  itemExpandHeight: number = 200;

  constructor(public navCtrl: NavController,
    public http: HttpClient, public myService: MyService) { }


  ionViewDidEnter(): void {
    var input = document.querySelector('#listItem');
    console.log(input);
    if(input.childNodes.length < 4) {
      this.load();
    }else {
      return;
    }
    
    
  }

  load(): void {
    this.http
      .get('http://www.emrekaragoz.com/gezirehberi/public_html/ionic/retrieve-data.php')
      .subscribe((data: any) => {
        for (let eachObj of data) {
          if (eachObj.PNR_no == this.myService.sendPnrNumber()) {
            this.items.push(eachObj);
          }
        }
      },
        (error: any) => {
          console.dir(error);
        });
  }

  expandItem(item) {
    item.expanded = !item.expanded;

    (item.expanded) ? item.beingViewed = 'İncele' : item.beingViewed = "Kapat";
  }

}
