import { NavController, Page } from 'ionic-angular';
import { Page2 } from '../page2/page2';
@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
	username: string = "Hellfffo";
	password: string;
	nav: any;
  constructor(nav: NavController) {
    this.nav = nav;
  }
  pushPage(){
  	
    this.nav.push(Page2);
    
  }

}