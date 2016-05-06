import {NavController,Page} from 'ionic-angular';
import {Page2Service} from './Page2.service';
import { Page3 } from '../page3/page3';

@Page({
	templateUrl: 'build/pages/page2/page2.html',
	providers: [Page2Service]
})
export class Page2 {
	message:any;
	slides:any;
	second :any;
	timePromise :any;
	paracont :any ;
	paraclass :any
	paraevent :any;
	nav: NavController;

	mcardName: String;
	mcardNumber: String;
	mprovince: String;
	mcity: String;
	mbranch: String;
	mphoneNumber: any;
	
	mySlideOptions = {

		autoplay: 3000,
		loop: true,
		speed: 500
	};

	constructor(private page2Service: Page2Service, nav: NavController) {
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
	pushPage() {

		this.nav.push(Page3);

	}

}
