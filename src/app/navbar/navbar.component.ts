import { CryptService } from './../services/crypt.service';
import { AuthService } from './../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { RegisterServiceService } from './../services/register-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:RegisterServiceService,private authS:AuthService,private cryptS:CryptService) { }
  title = 'AymanKoSolve';
  ngOnInit() {
  //   const email=localStorage.getItem('email');
  //   const expire=localStorage.getItem('expire');
  //   const role=localStorage.getItem('role');

  //   if(email!=null&&expire!=null&&role!=null){
  //   if(this.authS.CheckStorage()===false){
  //     this.LogOut();
  //   }
  // }
  }

  LogOut(){
      this.service.LogOut().subscribe(sucess=>{
        localStorage.clear();
      
        console.log("loged out");
      },err=>console.log(err))
  }


  isUserLoggedIn(){

     const email = !!localStorage.getItem('email')
     const role = !!localStorage.getItem('role');
     const expire = !!localStorage.getItem('expire');


     if(email&&role && expire)return true;
     else return false;
  }

  isAdmin(){

    if(true){

     return true;

    }


    return false;
  }
}
