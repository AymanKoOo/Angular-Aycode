import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

import { IsAdmin } from 'src/app/models/IsAdmin';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private admin :AdminService) { }
IsAdmin:IsAdmin;
  AdminCheck:Boolean;
  ngOnInit(): void {

    this.IsAdminn();

  }

  IsAdminn(){
    this.admin.IsAdmin().subscribe(sucess=>{
      this.IsAdmin=sucess;
      this.AdminCheck=this.IsAdmin.IsAdminn;
    }),err=>{
      console.log(err);
    }
}
}
