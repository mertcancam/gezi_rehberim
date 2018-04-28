import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PnrPage } from './pnr';

@NgModule({
  declarations: [
    PnrPage,
  ],
  imports: [
    IonicPageModule.forChild(PnrPage),
  ],
})
export class PnrPageModule {}
