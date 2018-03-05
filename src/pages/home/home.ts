import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  text: string;
  textInput: string;

  constructor(public navCtrl: NavController) {

  }

  randomizeSubmit(value) {
    this.text = value.textInput;
  }
}
