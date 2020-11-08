import { CryptService } from './crypt.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private cryptS:CryptService) { }
////////JWT//////////////


//////////////////////
  public installStorage(rem:boolean,email:string,){

    const day = new Date();

    if(rem){
      day.setDate(day.getDate()+10);
    }
    else{
      day.setMinutes(day.getMinutes()+30);
    }

    //crypt
    localStorage.setItem("email",this.cryptS.Encrypt(email));
    localStorage.setItem("expire",this.cryptS.Encrypt(day.toString()));

    this.getRoleByEmail(email).subscribe(success=>{

      localStorage.setItem('role',this.cryptS.Encrypt(success));

    },error=>{
      console.log(error);
    })

  }

  CheckStorage(){

  //   // const email = this.cryptS.Decrypt(localStorage.getItem('email'));

  //   // const exp = this.cryptS.Decrypt(localStorage.getItem('expire'));

  //   // const role = this.cryptS.Decrypt(localStorage.getItem('role'));

  //   // if(email!=null && exp!=null && role!=null){

  //   //   this.validateUser(email,role).subscribe(success=>{
  //   //       console.log('user is authorized')
  //   //       return true;
  //   //   },err=>console.log(err));
  //   console.log(email)

  // // }
  // return false;
  }

  getRoleByEmail(email:string){
    return this.http.get('https://aycodeapi.azurewebsites.net/Account/GetRoleName/'+email,{responseType:'text'}).pipe();
  }

  validateUser(email:string,role:string){
    return this.http.get('https://aycodeapi.azurewebsites.net/Account/CheckUserClaims/'+email+'&'+role,{ withCredentials:true}).pipe();
  }

  verify(id:string,token:string){
    return this.http.get('https://aycodeapi.azurewebsites.net/Account/RegisterationConfirm?ID='+id+'&Token='+token,{ withCredentials:true}).pipe();
  }

}
