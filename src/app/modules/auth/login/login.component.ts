import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { LoginUserResponse } from 'src/app/interfaces/user/login-user-response.interface';
import { UserService } from 'src/app/services/user/user.service';
import { TypeDataValidator } from 'src/app/validators/type-data.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private typeDataValidator:TypeDataValidator,
    private userService:UserService,
    private router: Router,
    private sharingService: SharingService
  ){}  


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernameControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), this.typeDataValidator.validateUsername]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.typeDataValidator.validatePassword])
    });
  }
  

  onSubmit() {

    this.userService.loginUser({
      username: this.loginForm.get('usernameControl').value,
      password: this.loginForm.get('passwordControl').value
    })
    .subscribe((response: LoginUserResponse) => {
      localStorage.setItem('token_user_jwt', response.result.token);
      for(let name in this.loginForm.controls) {
        this.loginForm.controls[name].setValue('');
        this.loginForm.controls[name].markAsUntouched();
        this.loginForm.controls[name].markAsPending();
      }
      this.sharingService.sharingUserObservableData = response.result.user;
      this.router.navigate(['home/principal']);
      
    });

  }

}
