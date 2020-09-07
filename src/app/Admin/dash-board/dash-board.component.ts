import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private router: Router) { }
  isUserList:boolean=true;
  isAddUser:boolean=false;
  isprobSource:boolean=false;
  isprobSourceAdd:boolean=false;
  isprobType:boolean=false;
  isprobTypeAdd:boolean=false;
  isprobJoin:boolean=false;
  isprobJoinAdd:boolean=false;
  isprobJoinContent:boolean=false;
  isprobJoinContentAdd:boolean=false;
  ngOnInit(): void {
  // this.router.navigate(['/login']);
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

  }

  CheckUser():boolean{
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobType=false;
    this.isprobTypeAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isUserList=true;
  }

  AddUser():boolean{
    this.isUserList=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobType=false;
    this.isprobTypeAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isAddUser=true;
  }

  probSource():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSourceAdd=false;
    this.isprobType=false;
    this.isprobTypeAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobSource=true;
  }

  probSourceAdd():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobType=false;
    this.isprobTypeAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobSourceAdd=true;
  }


  probType():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    //isprobTypeAdd:boolean=false;
    this.isprobTypeAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobType=true;
  }

  probTypeAddd():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobType=false;
    this.isprobSourceAdd=false;
    this.isprobJoin=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobTypeAdd=true;
  }

  probJoin():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobTypeAdd=false;
    this.isprobType=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobJoin=true;
  }


  probJoinAdd():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobTypeAdd=false;
    this.isprobType=false;
    this.isprobJoin=false;
    this.isprobJoinContent=false;
    this.isprobJoinContentAdd=false;
    return this.isprobJoinAdd=true;
  }

  probJoinContent():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobTypeAdd=false;
    this.isprobType=false;
    this.isprobJoinAdd=false;
    this.isprobJoinContentAdd=false;
    return this.isprobJoinContent=true;
  }


  probContentAdd():boolean{
    this.isUserList=false;
    this.isAddUser=false;
    this.isprobSource=false;
    this.isprobSourceAdd=false;
    this.isprobTypeAdd=false;
    this.isprobType=false;
    this.isprobJoinAdd=false;
    this.isprobJoin=false;
    this.isprobJoinContent=false;
    return this.isprobJoinContentAdd=true;
  }
}
