import {Page, NavController, NavParams} from 'ionic-angular';
import {Page1Service} from '../page1/Page1.service';
import {Detail} from "../detail/detail";
@Page({
  templateUrl: 'build/pages/page3/page3.html',
  providers: [Page1Service],

})
export class Page3 {
  private nav: NavController;
  private shareData: any;

  private message: any;

  private mHouseProv: any="福建";
  private mHouseCity: any="福州";
  private mHouseCounty: any="福清市";
  private mHouseAdress: any="音西镇城丰世纪园1号楼1602";
  private mHousePostcode: any="350300";

  private mWorkProv: any ="福建";
  private mWorkCity: any ="福州";
  private mWorkCounty: any="鼓楼区";

  private mWorkAdress: any="五四北路天骅大厦2088";
  private mWorkPostcode: any="350000";
  private mWorkPhoneAreaCode: any="0591";
  private mWorkPhoneNum: any ="87737103";

  private mRelatedName: any ="张三";
  private mRelatedPhone: any="13232133211";
  private mRelated: any="朋友";
  private mSendType: any ='电子邮箱';
  private mEmail: any="jg.huang@meganet.com.cn";

  private mRecommendedName: any="李四";
  private mRecommendedPhone: any='13232132312';



  constructor(private page1Service: Page1Service, nav: NavController, params: NavParams) {
    this.nav = nav;
    this.message = page1Service.getMessage();
    this.shareData = params.get('mshareData');

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
      "mEmail": this.mEmail,
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
