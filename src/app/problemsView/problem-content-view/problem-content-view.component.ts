import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

import { GetprobContentJ } from 'src/app/models/GetprobContentJ';

@Component({
  selector: 'app-problem-content-view',
  templateUrl: './problem-content-view.component.html',
  styleUrls: ['./problem-content-view.component.css']
})
export class ProblemContentViewComponent implements OnInit {

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router) { }
  GetprobContentJ:GetprobContentJ[];
  headerName:string;
  ngOnInit(): void {
    this.GetprobContentJ=null;
    this.activateRoute.paramMap.subscribe(param=>{
       this.headerName=param.get('ProblemName');
      this.GetproContent(this.headerName);
    },)
  }

  GetproContent(headerName){

    this.service.GetprobContentJ(headerName).subscribe(sucess=>{
      console.log(sucess);
      this.GetprobContentJ=sucess;
    },err=>{
      console.log(err);
    })
  };

 getCode(contentName:string){
  console.log("here");
  console.log(contentName);
  console.log(this.headerName);

  this.router.navigate(['/getContentCode',contentName,this.headerName]);

 }
}
