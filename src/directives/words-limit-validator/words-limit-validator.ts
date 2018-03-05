import { Directive, Input } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function limitValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let regex = new RegExp(/(^(([^\s*]+)\s*){1,5}$)/, 'i');
    let valid = regex.test(control.value);

    return valid ? null : {
      limit: {
        valid: false
      }
    }
  };
}

@Directive({
  selector: '[words-limit-validator]'
})

export class WordsLimitValidatorDirective {
  validate(control: FormControl): { [key: string]: any; } {
    return limitValidator();
  }
}
