import { send } from 'process';
import { people } from './../../models/people';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component,ViewChild,OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";
import 'brace';
import 'brace/mode/sql';
import 'brace/mode/csharp';
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
  }

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router,private http:HttpClient,private fb:FormBuilder) {
  }


  contentByname:contentByname;
  messageValidate={
    roomName:{
      required:'Enter room Name',
      uniqueRoom:'Enter unique roomName'
    }
  }

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
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  code:string="";
  text:string = this.msgDto.msgText;
  msg:string;
  group:string;
  method:string="All";
  selectSize:number=0;
  groupValue:string="";
  roomForm : FormGroup;
  roomname:string;
  IsRoom:number;
  //
  contentName:string;
  problemDiff:string;
  ngOnInit(): void {
    this.roomForm = this.fb.group({
      roomName:['',Validators.required],

    });


    this.IsRoom==0;
    this.contentByname=null;
    this.activateRoute.paramMap.subscribe(param=>{
      this.roomname =param.get('roomID');
      this.contentName = param.get('contentName');
      this.problemDiff = param.get('headerName');
      if(this.contentName!=null){
       this.getContentDetails(this.contentName);
      }

      ///Created The Room///
       //this.createEditorRoom(this.roomname);
      ////////////////////
      });

      //Must add groups in database when created
      //and aad all users connected to it , when they leave delete group
      //button to leave group
    if(this.contentName==null){

      function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

    ///Connection Start////
    this.connection.onclose(async () => {
      await this.start();
    });
    ///2///////////////////

    this.connection.on("ReceiveCode", (code) => {
      this.msgDto.code = code;
    });

    this.connection.on("ReceiveText", (text) => {
      this.msgDto.msgText = text;

      // if(this.choose==true){
        var newDiv = document.createElement("div");
        //newDiv.classList.add("chat-message clearfix");
        newDiv.className = 'chat-message clearfix';
        newDiv.innerHTML = `

        <img src="https://img.icons8.com/cotton/128/000000/user-male--v1.png" width="32" height="32"/>
        <div class="chat-message-content clearfix">

            <span class="chat-time">`+
            formatAMPM(new Date)+`</span>

            <p id="messageText">`+this.msgDto.msgText+`</p>

        </div> <!-- end chat-message-content -->
    <hr>
  `;
        //newDiv.innerHTML=this.msgDto.msgText;
        //document.getElementById("messages").appendChild(newDiv);
      document.getElementById("message").appendChild(newDiv);
     // console.log("msgDto"+text);
     });
     ///////send message to specific user/////
    this.connection.on("UserConnected", (connectionId) => {

    let customObj = new people();
    customObj.id = this.k;
    customObj.name = connectionId;
    this.peoplee.push(customObj);
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
    this.send();
    $("#messageee").on('keypress',function(e) {
      if(e.which == 13) {
        // Trigger the button element with a click
        //this.send();
      }
   });

   }

   setTimeout(()=> {
    this.createRooom(this.roomname);

    this.connection.invoke("SendMessageToGroup",this.groupValue,this.msgDto.msgText).catch(function (err) {
       console.log(err);
    });
}, 0);

  }


  ////Create Room//
  CreateRoom(){
    var result  =  Math.random().toString(8).substring(2, 6) + Math.random().toString(8).substring(2, 6);
    this.router.navigate(['/codeEditor',result]);
  }
  //Join Room///
  joinRoom(){
    this.roomname = this.roomForm.value.roomName;
    this.router.navigate(['/codeEditor',this.roomname]);

  }
  ///
  ///Get Code///
  getContentDetails(contentName){
    this.service.GetprobContentByName(contentName).subscribe(sucess=>{
       this.contentByname = sucess;
       this.code=this.contentByname[0].code;
      //console.log( this.contentByname);
    }),err=>{
      console.log(err);
    }
  }

///////////////////////////////////
// Calls the controller method
createRooom(roomID:string){
  this.groupValue = roomID;
  this.connection.invoke('joingroup',this.groupValue)
  .catch(function (err) {
      console.log(err);
  });
}
createEditorRoom(roomID:string){
  this.groupValue = roomID;
  this.connection.invoke('joingroupEditor',this.groupValue)
  .catch(function (err) {
      console.log(err);
  });
}

public change() {
  if(this.contentName==null){

    this.createEditorRoom(this.roomname);
    this.connection.invoke("SendMessageToGroupEditor",this.groupValue,this.msgDto.code).catch(function (err) {
      console.log(err);
   });
  }
}

public send() {
  //if(this.group=="All"){
  //  this.connection.invoke("SendMessageToAll",this.msgDto.msgText).catch(function (err) {
//console.log(err)});
 // }

  this.createRooom(this.roomname);

  this.connection.invoke("SendMessageToGroup",this.groupValue,this.msgDto.msgText).catch(function (err) {
     console.log(err);
  });

  // else{
  //   this.connection.invoke("SendMessageToUser",this.group,this.msgDto.msgText).catch(function (err) {
  //     console.log(err);
  // });
}
///////////////////////////////////



// public GetId(){
//   this.groupValue="PrivateGroup";
//   this.connection.invoke('joingroup',"PrivateGroup")
//     .catch(function (err) {
//         console.log(err);
//     });
//     console.log("joined");

// }


// popUpRoom(){
//   var popup = document.getElementById("CpopUp");
//   popup.style.visibility="visible"
// }
// popUpJoinRoom(){
//   var popup = document.getElementById("JpopUp");
//   popup.style.visibility="visible"
// }
// JoinRooem(){
//   if(this.roomForm.valid){
//     this.roomname = this.roomForm.value.roomName;
//     this.groupValue= this.roomname;
//     this.connection.invoke('joingroup',this.groupValue)
//     .catch(function (err) {
//         console.log(err);
//     });
//     console.log("Joined Room");
//     console.log(this.roomname);
//   }
//  }


//  createRoom(){
//   if(this.roomForm.valid){
//     this.roomname = this.roomForm.value.roomName;
//     this.groupValue= this.roomname;
//   this.connection.invoke('joingroup',this.groupValue)
//   .catch(function (err) {
//       console.log(err);
//   });
//   console.log("Room Created Share ID with Friends,Room ID is");
//   console.log(this.roomname);
//   }


// public joinRoom(){
//   this.groupValue="AA22RR";
//   this.connection.invoke('joingroup',"AA22RR")
//     .catch(function (err) {
//         console.log(err);
//     });
//     console.log("Joined Room AA22RR");
// }

toggleChat() {
  $('#live-chat header').on('click', function() {

    $('.chat').slideToggle(300, 'swing');
    $('.chat-message-counter').fadeToggle(300, 'swing');

});

$('.chat-close').on('click', function(e) {

    e.preventDefault();
    $('#live-chat').fadeOut(300);

});
}

}



///live code
//send all
//send to user
///////////////
//Create room// who join can chat
