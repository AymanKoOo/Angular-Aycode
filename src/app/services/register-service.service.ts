import { loginModel } from './../models/login-models';
import { usersModel } from './../models/users-models';
import { RegisterModel } from './../models/register-models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }


  baseUrl='https://aycodeapi.azurewebsites.net/Account/';
  headers={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }),
    withCredentials:true
  };

  Register(reg : RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl+'Register', reg,this.headers).pipe();
  }

  GetAllUsers():Observable<usersModel[]>{
    return this.http.get<usersModel[]>(this.baseUrl+'GetAllusers').pipe();
  }

  // UserLogin(logn:loginModel):Observable<loginModel>{
  //   return this.http.post<loginModel>(this.baseUrl+'Login',logn,this.headers).pipe();
  // }

  UserLoginJWT(logn:loginModel):Observable<loginModel>{
    return this.http.post<loginModel>(this.baseUrl+'Login',logn,this.headers).pipe();
  }

  LogOut(){
    return this.http.get(this.baseUrl+'Logout',{withCredentials:true}).pipe();
  }

  getRoleByEmail(email:string){
    return this.http.get(this.baseUrl+'GetRoleName/'+email,{responseType:'text'}).pipe();
  }


  /////////////Check By Is//////////////////
  IsUserNameExist(userName:string){
    return this.http.get(this.baseUrl+'IsUserNameExist/'+userName).pipe();
  }

  IsEmailExist(email:string){
    return this.http.get(this.baseUrl+'IsEmailExist/'+email).pipe();
  }
}
