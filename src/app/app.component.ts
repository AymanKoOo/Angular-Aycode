import { CryptService } from './services/crypt.service';
import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { RegisterServiceService } from './services/register-service.service';
import * as $ from "jquery";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:RegisterServiceService,private serv:CryptService,private router:Router,private fb:FormBuilder){}
  messageValidate={
    roomName:{
      required:'Enter room Name',
      uniqueRoom:'Enter unique roomName'
    }
  }
  roomForm : FormGroup;
  roomname:string;

ngOnInit(): void {
  this.roomForm = this.fb.group({
    roomName:['',Validators.required],
  });
}

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

CreateRoom(){
  this.roomname = this.roomForm.value.roomName;
  this.router.navigate(['/codeEditor',this.roomname]);
}

JoinRoom(){
  this.roomname = this.roomForm.value.roomName;
  this.router.navigate(['/codeEditor',this.roomname]);
}

}
