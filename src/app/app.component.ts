import { AdminService } from 'src/app/services/admin.service';
import { CryptService } from './services/crypt.service';
import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { RegisterServiceService } from './services/register-service.service';
import * as $ from "jquery";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsAdmin } from './models/IsAdmin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:RegisterServiceService,private serv:CryptService,private router:Router,private fb:FormBuilder,private admin :AdminService){}
  messageValidate={
    roomName:{
      required:'Enter room Name',
      uniqueRoom:'Enter unique roomName'
    }
  }
  roomForm : FormGroup;
  roomname:string;
  IsAdmin:IsAdmin;
  AdminCheck:Boolean;

ngOnInit(): void {
  this.roomForm = this.fb.group({
    roomName:['',Validators.required],
  });

}
///
LoggedToken(){
  if(localStorage.getItem('token')!=null){
    return true;
  }
  else{
    return false;
  }
}

// IsAdminn(){
//   this.admin.IsAdmin().subscribe(sucess=>{
//     this.IsAdmin=sucess;
//     this.AdminCheck=this.IsAdmin.IsAdminn;

//   }),err=>{
//     console.log(err);
//   }
// }




////



LogOut(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

CpopUp(){
  var CpopUp=document.getElementById("CpopUp");
  var JpopUp=document.getElementById("JpopUp");
  CpopUp.style.visibility = "visible";
  JpopUp.style.visibility = "hidden";
}

JpopUp(){

  var JpopUp=document.getElementById("JpopUp");
  var CpopUp=document.getElementById("CpopUp");
  JpopUp.style.visibility = "visible";
  CpopUp.style.visibility = "hidden";

}


  ////Create Room//
  CreateRoom(){
    var result  =  Math.random().toString(8).substring(2, 6) + Math.random().toString(8).substring(2, 6);
    console.log(result);
    this.router.navigate(['/codeEditor',result]);
  }
  //Join Room///
  joinRoom(){
    this.roomname = this.roomForm.value.roomName;
    this.router.navigate(['/codeEditor',this.roomname]);
  }


}
