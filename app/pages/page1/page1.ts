import {NavController, Page} from 'ionic-angular';

import {Page1Service} from './Page1.service';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [Page1Service],
})


export class Page1 {
  myColor: string;
  private shareData: any;
  private message: any;
  private slides: any;
  private second: any;
  private timePromise: any;
  private paracont: any;
  private paraclass: any
  private paraevent: any;
  private nav: NavController;


  private mProvince: String="福建";
  private mCity: String="福州";
  private mBranch: String="台江支行营业厅----台江区下杭路52号";
  private mCheckbox: boolean;
  private mCardName: String="漂亮妈妈卡";
  private mgetType: String ="上门自提";
  private mCardUrl: String="http://www.abchina.com/abcpic/xyk/km/201404/W020140421333679796367.jpg";
  private mPhoneNumber: String="13960859148";

  mySlideOptions = {

    autoplay: 3000,
    loop: true,
    speed: 500
  };


  constructor(private page1Service: Page1Service, nav: NavController) {
    this.nav = nav;
    this.slides = page1Service.getSlides();
    this.message = page1Service.getMessage();
    this.paracont = '获取验证码';



  }

  setCountdown() {
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
    }, 1000, 100);

  }
  seeMore() {
    this.nav.push(Page3);
  }
  pushPage() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.mCardName==this.slides[i].name) {
        this.mCardUrl = this.slides[i].image;

      }
    }
    this.shareData = {
      "page1": {
        "mprovince": this.mProvince,
        "mCity": this.mCity,
        "mBranch": this.mBranch,
        "mCardName":this.mCardName,
        "mgetType":this.mgetType,
        "mCardUrl":this.mCardUrl,
        "mphoneNumber": this.mPhoneNumber
      }
    };
    if (this.mCheckbox) {
      this.nav.push(Page2, { mshareData: this.shareData });
    };



  }

}
