import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private serv : AuthService,private activatedRoute:ActivatedRoute,private router:Router) { }

  userId:string;
  token:string;

  ngOnInit(): void {
    this.userId="";
    this.token="";

      this.activatedRoute.queryParams.subscribe(param=>{
         this.userId=param['ID'];
         this.token =param['Token'];
      },err=>console.log(err));

      if(this.userId&&this.token){
        this.Completeverify(this.userId,this.token);
        console.log("herrrrrrrrrrrrrrrrrr");
      }

  }

  Completeverify(id,token){

    this.serv.verify(id,token).subscribe(succes=>{

      console.log(succes);

    },err=>{
      console.log(err);
    });

  }



}
