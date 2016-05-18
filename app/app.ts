import { App, Platform} from 'ionic-angular';
import { Login } from './pages/login/login';

@App({
	template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

export class MyApp {
	rootPage: any = Login;

	constructor(platform: Platform) {
		platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
  });
	}
}
