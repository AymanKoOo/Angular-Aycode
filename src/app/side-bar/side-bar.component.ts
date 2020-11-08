import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

import { IsAdmin } from 'src/app/models/IsAdmin';
import { userModel } from '../models/user-model';
import { userDetails } from '../models/usersDetails';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private admin :AdminService) { }
  IsAdmin:IsAdmin;
  AdminCheck:Boolean;
  userDetails:userDetails;
  ngOnInit(): void {
    this.getName();
    this.IsAdminn();
  }

   getName(){
    this.admin.GetAllUserData().subscribe(success=>{
      this.userDetails=success;

    },err=>{
    console.log(err);
    });
  }

  IsAdminn(){
    this.admin.IsAdmin().subscribe(sucess=>{
      this.IsAdmin=sucess;
    }),err=>{
      console.log(err);
    }
  }

}
