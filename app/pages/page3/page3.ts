import {Page, NavController, NavParams} from 'ionic-angular';
import {Page1Service} from '../page1/Page1.service';
import {Detail} from "../detail/detail";
@Page({
  templateUrl: 'build/pages/page3/page3.html',
  providers: [Page1Service],

})
export class Page3 {
  private nav: NavController;
  private params: NavParams;
  private shareData: any;

  private message: any;

  private mHouseProv: any;
  private mHouseCity: any;
  private mHouseCounty: any;
  private mHouseAdress: any;
  private mHousePostcode: any;

  private mWorkProv: any;
  private mWorkCity: any;
  private mWorkCounty: any;

  private mWorkAdress: any;
  private mWorkPostcode: any;
  private mWorkPhoneAreaCode: any;
  private mWorkPhoneNum: any;
  private mWorkEmail: any;

  private mRelatedName: any;
  private mRelatedPhone: any;
  private mRelated: any;
  private mSendType: any;
  private mRecommendedName: any;
  private mRecommendedPhone: any;



  constructor(private page1Service: Page1Service, nav: NavController, params: NavParams) {
    this.params = params;
    this.nav = nav;
    this.message = page1Service.getMessage();
    this.shareData = this.params.get('mshareData');

  }
  pushPage() {
    this.shareData.page3 = {
      "mHouseProv": this.mHouseProv,
      "mHouseCity": this.mHouseCity,
      "mHouseCounty": this.mHouseCounty,
      "mHouseAdress": this.mHouseAdress,
      "mHousePostcode": this.mHousePostcode,
      "mWorkProv": this.mWorkProv,
      "mWorkCity": this.mWorkCity,
      "mWorkCounty": this.mWorkCounty,
      "mWorkAdress": this.mWorkAdress,
      "mWorkPostcode": this.mWorkPostcode,
      "mWorkPhoneAreaCode": this.mWorkPhoneAreaCode,
      "mWorkPhoneNum": this.mWorkPhoneNum,
      "mWorkEmail": this.mWorkEmail,
      "mRelatedName": this.mRelatedName,
      "mRelatedPhone": this.mRelatedPhone,
      "mRelated": this.mRelated,
      "mSendType": this.mSendType,
      "mRecommendedName": this.mRecommendedName,
      "mRecommendedPhone": this.mRecommendedPhone,
    };

    this.nav.push(Detail, { mshareData: this.shareData });


  }
}
