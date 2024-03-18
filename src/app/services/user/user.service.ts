import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user.interface';
import { LoginUserResponse } from 'src/app/interfaces/user/login-user-response.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ){}


  createUser(){

  }

  loginUser(user:User): Observable<LoginUserResponse>{
    return this.httpClient.post<any>(`${environment.apiUrl}/login-user`, user);
  }

}