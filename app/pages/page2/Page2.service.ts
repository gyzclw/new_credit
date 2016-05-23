import {Injectable} from '@angular/core';
import {Page2Data} from "./Page2Data"
@Injectable()
export class Page2Service {
	 basemessages: any;
  constructor() {

  }
  getBaseMessagesOrder() {
    this.basemessages = Page2Data.basemessagesOrder;
    return this.basemessages;
  }

}
