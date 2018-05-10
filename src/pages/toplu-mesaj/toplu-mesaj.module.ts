import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopluMesajPage } from './toplu-mesaj';
@NgModule({
  declarations: [
    TopluMesajPage,
  ],
  imports: [
    IonicPageModule.forChild(TopluMesajPage),
  ],
})
export class TopluMesajPageModule {}
