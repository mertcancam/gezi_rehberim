import {Component, OnInit} from "@angular/core";


import { NavController, NavParams } from "ionic-angular";


@Component({
	selector: "page-user",
	templateUrl: "user.html"
})

export class UserPage implements OnInit {
	name: string;

	constructor (private navParams: NavParams, public navCtrl: NavController) {}


	ngOnInit() {
		this.name = this.navParams.get("userName");
	}
	goBack() {
		this.navCtrl.popToRoot();
	}
}
