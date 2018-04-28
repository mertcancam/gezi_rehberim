import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilgilendirmePage } from './bilgilendirme';

@NgModule({
  declarations: [
    BilgilendirmePage,
  ],
  imports: [
    IonicPageModule.forChild(BilgilendirmePage),
  ],
})
export class BilgilendirmePageModule {}
