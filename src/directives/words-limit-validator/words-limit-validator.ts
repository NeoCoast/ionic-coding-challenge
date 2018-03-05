import { Directive } from '@angular/core';

/**
 * Generated class for the WordsLimitValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[words-limit-validator]' // Attribute selector
})
export class WordsLimitValidatorDirective {

  constructor() {
    console.log('Hello WordsLimitValidatorDirective Directive');
  }

}
