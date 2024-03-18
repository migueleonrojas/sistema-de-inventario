import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorIsEqualTwoValueControlsMatcher } from 'src/app/shared/custom-errors/validate-is-equal-two-value-controls-matcher.error';
import  {TypeDataValidator}  from 'src/app/validators/type-data.validator'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  matcherTwoValuesEquals = new ValidatorIsEqualTwoValueControlsMatcher();

  constructor(
    private typeDataValidator:TypeDataValidator
  ){}  


  ngOnInit(): void {
    this.signinForm = new FormGroup({
      fullnameControl: new FormControl('', [Validators.required, Validators.minLength(5) ,Validators.maxLength(50), this.typeDataValidator.validateFullName]),
      usernameControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), this.typeDataValidator.validateUsername]),
      idControl: new FormControl('', [Validators.required, this.typeDataValidator.validateId]),
      emailControl: new FormControl('', [Validators.required, this.typeDataValidator.validateEmail, Validators.maxLength(50)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.typeDataValidator.validatePassword]),
      confirmPasswordControl: new FormControl('', [Validators.required, this.typeDataValidator.validatePassword]),
    },
    {
      validators: this.typeDataValidator.isEqualValue('passwordControl','confirmPasswordControl'),
      
    }
  );
  }

  signin() {

    
    console.log(this.signinForm.valid);
  }
}
