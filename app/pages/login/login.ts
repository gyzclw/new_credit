import { NavController, Page } from 'ionic-angular';
import { Page1 } from '../page1/page1';
@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class Login {
	username: string;
	password: string;
	nav: any;
  constructor(nav: NavController) {
    this.nav = nav;
  }
  pushPage(){
    this.nav.push(Page1);    
  }

}