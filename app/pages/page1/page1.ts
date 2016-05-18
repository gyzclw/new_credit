import {NavController, Page} from 'ionic-angular';

import {Page1Service} from './Page1.service';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';


@Page({
	templateUrl: 'build/pages/page1/page1.html',
	providers: [Page1Service],
})


export class Page1 {
	private shareData: any;
	private message: any;
	private slides: any;
	private second: any;
	private timePromise: any;
	private paracont: any;
	private paraclass: any
	private paraevent: any;
	private nav: NavController;

	
	private mprovince: String;
	private mcity: String;
	private mbranch: String;
	private mcheckbox: boolean;
	private mcardName: String;
	private mcardNumber: String;
	private mphoneNumber: any;
	
	mySlideOptions = {

		autoplay: 3000,
		loop: true,
		speed: 500
	};


	constructor(private page2Service: Page1Service, nav: NavController) {
		this.nav = nav;
		this.slides = page2Service.getSlides();
		this.message = page2Service.getMessage();
		this.paracont = '获取验证码';

	}

	setCountdown(){
		this.second = 60;
		this.timePromise = undefined;
		this.paracont = '获取验证码';
		this.paraclass = 'but_null';
		this.paraevent = true;
		this.timePromise = setInterval(() => {
			if (this.second <= 0) {
				clearInterval(this.timePromise);
				this.timePromise = undefined;
				this.second = 60;
				this.paracont = '重发验证码';
				this.paraclass = 'but_null';
				this.paraevent = true;
			} else {
				this.paracont = this.second + '秒后可重发';
				this.paraclass = 'not but_null';
				this.second--;
			}
		},  1000,100);	
	}
	seeMore() {
		this.nav.push(Page3);
	}
	pushPage() {
		this.shareData = {
			"page1": {
				"mprovince": this.mprovince,
				"mcity":this.mcity,
				"mbranch":this.mbranch,
				"mcardName":this.mcardName,
				"mcardNumber": this.mcardNumber,
				"mphoneNumber": this.mphoneNumber
			}
		};
		if (this.mcheckbox) {
			this.nav.push(Page2, { mshareData: this.shareData });
		};

	

	}

}
