import { AdminService } from 'src/app/services/admin.service';
import { CryptService } from './../services/crypt.service';
import { AuthService } from './../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { RegisterServiceService } from './../services/register-service.service';
import { Component, OnInit } from '@angular/core';

import { userDetails } from 'src/app/models/usersDetails';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:RegisterServiceService,private authS:AuthService,private cryptS:CryptService,private adminSrv:AdminService) { }
  title = 'AymanKoSolve';
  userDetails:userDetails;
  ngOnInit() {


  }

  LogOut(){
      // this.service.LogOut().subscribe(sucess=>{

      // },err=>console.log(err))
      localStorage.clear();
      console.log("loged out");
  }


  isUserLoggedIn(){

     const email = !!localStorage.getItem('email')
     const role = !!localStorage.getItem('role');
     const expire = !!localStorage.getItem('expire');


     if(email&&role && expire)return true;
     else return false;
  }


  getUserDetails(){
    this.adminSrv.GetAllUserData().subscribe(succs=>{
      this.userDetails=succs;
    },erro=>{
      console.log(erro);
    })
}

}
