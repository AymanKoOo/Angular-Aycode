import { HttpClient } from '@angular/common/http';
import { Component,ViewChild,OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

import 'brace';
import 'brace/mode/sql';
import { contentByname } from 'src/app/models/contentByname';
import * as signalR from '@microsoft/signalr';
import { MessageDto } from 'src/app/models/MessageDto';

@Component({
  selector: 'app-code-editor-view',
  templateUrl: './code-editor-view.component.html',
  styleUrls: ['./code-editor-view.component.css']
})

export class CodeEditorViewComponent implements OnInit {

  // text:string = "";
  // options:any = {maxLines: 1000, printMargin: false};

  // onChange(code) {
  //     console.log("new code", code);
  // }

  options:any = {maxLines: 1000, printMargin: false};

  onChange(code) {
      console.log("new code", code);
  }

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router,private http:HttpClient) { }

  contentByname:contentByname;

  ///1//Connection//
  private  connection: any = new signalR.HubConnectionBuilder().withUrl("http://localhost:50455/chatsocket")   // mapping to the chathub as in startup.cs
  .configureLogging(signalR.LogLevel.Information)
  .build();

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
  ngOnInit(): void {
    ///Connection Start////
    this.connection.onclose(async () => {
      await this.start();
    });
    //////////////////////
    this.connection.on("ReceiveText", (text) => {
      this.msgDto.msgText = text;
     });
    this.start();
    ///////////

    this.contentByname=null;
    this.activateRoute.paramMap.subscribe(param=>{
      var contentName = param.get('contentName');
      this.service.GetprobContentByName(contentName).subscribe(sucess=>{
        this.contentByname=sucess;
        console.log(this.contentByname);
      },err=>{
        console.log(err);
      })
    },)
  }


  ///////////////////////////////////
// Calls the controller method
public change() {
   let POST_URL = "http://localhost:50455/api/chat/write"
   this.http.post(POST_URL,this.msgDto).subscribe(data => console.log(data),err=>console.log(err));
  // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
}

// public retrieveMappedObject(): Observable<MessageDto> {
//   return this.sharedObj.asObservable();
// }
}
