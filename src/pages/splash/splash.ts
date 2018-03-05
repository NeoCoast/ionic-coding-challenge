import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public splashScreen: SplashScreen, public navCtrl: NavController) { }

  ionViewDidEnter() {
    this.splashScreen.hide();

    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);
    }, 2000);
  
  }
}
