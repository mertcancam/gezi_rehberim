import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-gps-ekrani',
  templateUrl: 'gps-ekrani.html',
})
export class GpsEkraniPage {

  map:any;
  infoWindow:any;

  constructor(public navCtrl: NavController) {
    let that=this;
    setTimeout (function(){
        that.googleMap();
    },100)
  }

  googleMap()
  {
    let that = this;

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.7487142, lng: 30.474801},
      zoom: 17.3                              
    });
    this.infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
          position: pos,
          map:  that.map,
          title: 'Konumunuz',
          animation:google.maps.Animation.BOUNCE,
        });
        
        
        that.map.setCenter(pos);
      }, function() {
        this.handleLocationError(true, that.infoWindow,that.map.getCenter(),that.map);
      });
    } else {
      // Browser doesn't support Geolocation
     this.handleLocationError(false, that.infoWindow, that.map.getCenter(),that.map);
    }
  }


   handleLocationError(browserHasGeolocation, infoWindow, pos,map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }  
}
