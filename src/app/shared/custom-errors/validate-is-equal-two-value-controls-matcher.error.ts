import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { TypeDataValidator } from "src/app/validators/type-data.validator";

export class ValidatorIsEqualTwoValueControlsMatcher implements ErrorStateMatcher {
  
  isErrorState(control: AbstractControl<any, any>, form: FormGroupDirective | NgForm): boolean { 

    return (form.errors?.['isNotEqualValid'] && control.dirty)?? false;
  }


}