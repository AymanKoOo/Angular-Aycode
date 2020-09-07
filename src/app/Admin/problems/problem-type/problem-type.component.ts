import { FproblemTypeModel } from './../../../models/problems/FproblemType';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-type',
  templateUrl: './problem-type.component.html',
  styleUrls: ['./problem-type.component.css']
})
export class ProblemTypeComponent implements OnInit {

  adminServ: any;
  IndexeddbService: any;

  constructor(private fb:FormBuilder,private servAdmin : AdminService,private router: Router) { }
  popoverTitle:string;
  popoverMessage:string;
  probType:FproblemTypeModel[];
  ngOnInit() {
    this.probType=null;
    this.servAdmin.GetAllprobType().subscribe(success=>{
        this.probType=success;
        console.log("got sources");
    },err=>{
        console.log(err);
    })
  }


Addtype(){
  this.router.navigate(['/AddprobType']);
}
  EditprobType(proptypeID:number){
    this.router.navigate(['/editprobType',proptypeID]);
  }

  DeleteProblemType(idd:number){
  this.servAdmin.DeleteprobType(idd).subscribe(succs=>{
      console.log("deleted");
  },erro=>{
    console.log(erro);
  })

  this.servAdmin.GetAllprobType().subscribe(success=>{
    this.probType=success;
    console.log("got sources");
},err=>{
    console.log(err);
})
}
}

