import {Page, NavParams, NavController} from 'ionic-angular';
import  {Page2Service} from './Page2.service';
import {Page3} from '../page3/page3'
@Page({
	templateUrl: 'build/pages/page2/page2.html',
	providers: [Page2Service]
})
export class Page2 {
	private basemessages: any;
	private params: NavParams;
	private nav: NavController;

	private shareData: any;

	private mCzName: any;
	private mCzPinyin: any;
	private mChecked: boolean;
	private mIdNumber: any; 
	private mBirthday: any;
	private mEducation: any;
	private mMarriage: any;
	private mLiveYear: any;
	private mHourseStatue: any;
	private mAnnualIncome: any;
	private mUnit: any;
	private mUnitYear: any;
	private mJob: any;
	private mIndustryCategory: any;
	private mPost: any;
	private mProfessional: any;

	constructor(private page2Service: Page2Service, nav: NavController, params: NavParams) {
		this.nav = nav;
		this.params = params;	  
		this.shareData = this.params.get('mshareData');
	  // alert(this.shareData.page1.mprovince);
	  this.basemessages = page2Service.getBaseMessagesOrder();
	}
	pushPage() {
		this.shareData.page2 = {
			"mCzName": this.mCzName,
			"mCzPinyin": this.mCzPinyin,
			"mChecked": this.mChecked,
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
