import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the MesajpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesajpage',
  templateUrl: 'mesajpage.html',
})
export class MesajpagePage {
  ref;
	name;
	newmessage;
	messagesList;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref = firebase.database().ref('messages');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopluMesajPage');
    this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				message: data.val().message
  			})
  		});
  		this.messagesList = tmp;
  	});
  }
}
