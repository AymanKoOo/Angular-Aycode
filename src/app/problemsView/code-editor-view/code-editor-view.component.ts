import { people } from './../../models/people';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component,ViewChild,OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';


import 'brace';
import 'brace/mode/sql';
import { contentByname } from 'src/app/models/contentByname';
import * as signalR from '@microsoft/signalr';
import { MessageDto } from 'src/app/models/MessageDto';
import { Console } from 'console';

@Component({
  selector: 'app-code-editor-view',
  templateUrl: './code-editor-view.component.html',
  styleUrls: ['./code-editor-view.component.css']
})

export class CodeEditorViewComponent implements OnInit {

  k:number=0;
  peoplee: people[] = [
    { id: 0 ,
      name: 'All' }
  ];

  options:any = {maxLines: 1000, printMargin: false};

  onChange(code) {
      console.log("new code", code);
  }

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router,private http:HttpClient) { }

  contentByname:contentByname;

  /////1 Connection//
  private  connection: any = new signalR.HubConnectionBuilder().withUrl("http://localhost:50455/chatsocket")   // mapping to the chathub as in startup.cs
  .configureLogging(signalR.LogLevel.Information)
  .build();
  /////////////////

  //////
  msgDto: MessageDto = new MessageDto();
  public async start() {
    try {
      await this.connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }


  text:string = this.msgDto.msgText;
  msg:string;
  group:string;
  method:string="All";
  selectSize:number=0;
  groupValue:string="";

  ngOnInit(): void {
    ///Connection Start////
    this.connection.onclose(async () => {
      await this.start();
    });
    ///2///////////////////
    this.connection.on("ReceiveText", (text) => {
      this.msgDto.msgText = text;

      // if(this.choose==true){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=this.msgDto.msgText;
        document.getElementById("messages").appendChild(newDiv);

      console.log("msgDto"+text);
     });
     ///////send message to specific user/////
     this.connection.on("UserConnected", (connectionId) => {

    let customObj = new people();
    customObj.id = this.k;
    customObj.name = connectionId;
    this.peoplee.push(customObj);
    console.log(this.peoplee.length);
    });

    this.connection.on("UserDisconnected",(connectionId)=>{
      var size = this.peoplee.length;
      for(var i=0;i<size;i++){
        if(i>-1&&this.peoplee[i].name==connectionId){
          this.peoplee.splice(i, 1);
        }

      }
    })
    this.start();
  }
///////////////////////////////////
// Calls the controller method
public change() {
    this.connection.invoke("codeEditor",this.msgDto.msgText).catch(function (err) {
    console.log(err)});
}


public send() {
  if(this.group=="All"){
    this.connection.invoke("SendMessageToAll",this.msgDto.msgText).catch(function (err) {
      console.log(err)});
  }

  else if(this.groupValue=="PrivateGroup"){

    this.connection.invoke("SendMessageToGroup","PrivateGroup",this.msgDto.msgText).catch(function (err) {
      console.log(err);
  });
  }

  else{
    this.connection.invoke("SendMessageToUser",this.group,this.msgDto.msgText).catch(function (err) {
      console.log(err);
  });
}
}


public GetId(){
  this.groupValue="PrivateGroup";
  this.connection.invoke('joingroup',"PrivateGroup")
    .catch(function (err) {
        console.log(err);
    });
    console.log("joined");

}

}


///live code
//send all
//send to user
///////////////
//Create room// who join can chat
