import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the TopluMesajPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toplu-mesaj',
  templateUrl: 'toplu-mesaj.html',
})
export class TopluMesajPage {
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
  send(){
  	// add new data to firebase
  	this.ref.push({
  		//name: this.name.username,
		message: this.newmessage
	  });
	  this.newmessage = '';
  }
  }
