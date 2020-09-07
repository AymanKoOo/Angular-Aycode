import { CryptService } from './services/crypt.service';
import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { RegisterServiceService } from './services/register-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:RegisterServiceService,private serv:CryptService,private router:Router){}

//   IsLogged(){
//   if (localStorage.getItem("token")  ==  null ) {

//     return false;

//   }
//   else if(localStorage.getItem("email")!="aaa123@gmail.com"){


//     return true;

//   }
//  }

//  LogOut(){
//   this.service.LogOut().subscribe(sucess=>{
//     localStorage.clear();

//     console.log("loged out");
//   },err=>console.log(err))

LogOut(){
  localStorage.removeItem('token');

  this.router.navigate(['/login']);
}


//  IsAdmin(){

//   if(localStorage.getItem("email")=="aaa123@gmail.com"){
//       return true
//   }
//    return false;
//  }




}
