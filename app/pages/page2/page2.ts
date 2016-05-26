import {Page, NavParams, NavController} from 'ionic-angular';
import {Page2Service} from './Page2.service';
import {Page3} from '../page3/page3';
@Page({
  templateUrl: 'build/pages/page2/page2.html',
  providers: [Page2Service]
})
export class Page2 {
  private basemessages: any;
  private nav: NavController;

  private shareData: any;

  private mCzName: any = "黄金贵";
  private mCzPinyin: any = "huang jin gui";
  private mIdType:any ='身份证';
  private mIdNumber: any = "350181199005272019";
  private mBirthday: any;
  private mEducation: any = "大学本科";
  private mMarriage: any = "未婚";
  private mLiveYear: any = "10";
  private mHourseStatue: any = "住房无贷款";
  private mAnnualIncome: any = "40000";
  private mUnit: any = "福建麦格数码科技有限公司";
  private mUnitYear: any = "2";
  private mJob: any = "企业职员(民营企业)";
  private mIndustryCategory: any = "计算机服务与软件业";
  private mPost: any = "职员";
  private mProfessional: any = "初级";

  constructor(private page2Service: Page2Service, nav: NavController, params: NavParams) {
    this.nav = nav;
    this.shareData=params.get('mshareData');
    // alert(this.shareData.page1.mprovince);
    this.mBirthday = this.mIdNumber.substring(6, 14);
    this.basemessages = page2Service.getBaseMessagesOrder();
  }
  pushPage() {
    this.shareData.page2 = {
      "mCzName": this.mCzName,
      "mCzPinyin": this.mCzPinyin,
      "mIdType": this.mIdType,
      "mIdNumber": this.mIdNumber,
      "mBirthday": this.mBirthday,
      "mEducation": this.mEducation,
      "mMarriage": this.mMarriage,
      "mLiveYear": this.mLiveYear,
      "mHourseStatue": this.mHourseStatue,
      "mAnnualIncome": this.mAnnualIncome,
      "mUnit": this.mUnit,
      "mJob": this.mJob,
      "mIndustryCategory": this.mIndustryCategory,
      "mPost": this.mPost,
      "mProfessional": this.mProfessional
    };

    this.nav.push(Page3, { mshareData: this.shareData });


  }

}
