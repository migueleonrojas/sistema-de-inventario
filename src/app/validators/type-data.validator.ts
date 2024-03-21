import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class TypeDataValidator {

  public validateFullName(control: AbstractControl){

    return RegExp('^[ÁÉÍÓÚáéíóúA-Za-z ]+$','g').test(control.value) ? null : {'fullNameValid':true};
  }

  public  validateUsername(control: AbstractControl){

    return RegExp('^[A-Za-z]+$','g').test(control.value) ? null : {'usernameValid':true};
  }


  public  validateId(control: AbstractControl){

    return RegExp('^[V]{1,1}[-][0-9]{9,9}$','g').test(control.value) ? null : {'idValid':true};
  }

  public  validateEmail(control: AbstractControl) {
    return RegExp('^[a-z0-9\.\_\-]+@[a-z]+[.][a-z]+$','g').test(control.value) ? null : {'emailValid':true};
  
  }

  public  validatePassword(control: AbstractControl) {
    return RegExp('^[^ ]+$','g').test(control.value) ? null : {'passwordValid':true};
  
  }


  public validateName(control: AbstractControl) {
    return RegExp('^.+$','g').test(control.value) ? null : {'nameValid':true}
  }


  public isEqualValue(controlName1: string, controlName2: string): ValidatorFn {
    
    return (controls: AbstractControl) => {       
       
      return (controls.get(controlName1).value.trim() === controls.get(controlName2).value.trim())
        ? null 
        : {'isNotEqualValid':true};
    }
  }

}