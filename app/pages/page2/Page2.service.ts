import {Injectable} from 'angular2/core';
import  {Page2Data} from "./paga2.data.ts"
@Injectable()
export class Page2Service{
	 basemessages: any;
	constructor(){

	}
	getBaseMessagesOrder(){
		this.basemessages = Page2Data.basemessagesOrder;
		return this.basemessages;
	}

}

