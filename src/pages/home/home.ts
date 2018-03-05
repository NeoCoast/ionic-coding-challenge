import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { limitValidator } from '../../directives/words-limit-validator/words-limit-validator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  text: string;
  textForm: FormGroup;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.textForm = new FormGroup({
      'textInput': new FormControl('', [
        Validators.required,
        limitValidator(),
      ]),
    });
  }

  randomizeSubmit() {
    this.text = this.textForm.value.textInput;
  }
}
