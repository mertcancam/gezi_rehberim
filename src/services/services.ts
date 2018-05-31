import { PnrPage } from '../pages/pnr/pnr';

export class MyService {

  private connectPnr;

  addToPnrNumber(comingPnr) {
    this.connectPnr = comingPnr;
  }

  sendPnrNumber() {
    return this.connectPnr;
  }


}