import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user.interface';
import { LoginUserResponse } from 'src/app/interfaces/user/login-user-response.interface';
import { SigninUserResponse } from 'src/app/interfaces/user/signin-user-response.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ){}


  signinUser(user:User):Observable<SigninUserResponse>{
    return this.httpClient.post<SigninUserResponse>(`${environment.apiUrl}/create-user`, user);
  }

  loginUser(user:User):Observable<LoginUserResponse>{
    return this.httpClient.post<LoginUserResponse>(`${environment.apiUrl}/login-user`, user);
  }

}