import { Component } from '@angular/core';

import { GpsEkraniPage } from '../gps-ekrani/gps-ekrani';
import { OneriEkraniPage } from '../oneri-ekrani/oneri-ekrani';
import { TopluMesajPage } from '../toplu-mesaj/toplu-mesaj';
import { BilgilendirmePage } from '../bilgilendirme/bilgilendirme';
import { MesajpagePage } from '../mesajpage/mesajpage';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BilgilendirmePage;
  tab2Root = MesajpagePage;
  tab3Root = GpsEkraniPage;
  tab4Root = OneriEkraniPage;
}
