import { AdminService } from './../services/admin.service';
import { RegisterServiceService } from './../services/register-service.service';
import { Component, OnInit } from '@angular/core';
import { CryptService } from '../services/crypt.service';
import { probSourceModel } from '../models/problems/problemSource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AdminService,private serv:CryptService,private router:Router) { }

  probSources:probSourceModel[];

  ngOnInit(): void {
    console.log("homeee");
    console.log(localStorage.getItem('token'));
    this.GetproSource();


  }

  GetproSource(){
    if(localStorage.getItem('token')!=null){
    this.service.GetAllprobSourceUser().subscribe(sucess=>{
      this.probSources=sucess;
      console.log(this.probSources);
    },err=>{
      console.log(err);
      location.reload();
    })
   }
  }

  passSource(source){
    this.router.navigate(['/passSource',source]);
  }

}
