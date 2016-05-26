import {Page, NavController, NavParams} from 'ionic-angular';
import  {SucessPage }from "../sucess/sucess";
/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail/detail.html',
})
export class Detail {
  private nav: NavController;
  private shareData: any;

  constructor(nav: NavController, params: NavParams) {
    this.nav=nav;
    this.shareData=params.get('mshareData');
  }

    pushPage() {
      this.nav.push(SucessPage, { mshareData: this.shareData });
    }
}
