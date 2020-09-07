import { problemJoin } from './../../../models/problems/problemJoin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

import { FprobHeaderModel } from 'src/app/models/problems/FproblemHeader';

@Component({
  selector: 'app-problem-header',
  templateUrl: './problem-header.component.html',
  styleUrls: ['./problem-header.component.css']
})
export class ProblemHeaderComponent implements OnInit {

  adminServ: any;
  IndexeddbService: any;

  constructor(private fb:FormBuilder,private servAdmin : AdminService,private router: Router) { }
  popoverTitle:string;
  popoverMessage:string;
  probHeader:FprobHeaderModel[];

  problemJoin:problemJoin[];
  ngOnInit() {
    this.probHeader=null;

    this.problemJoin=null;
    this.servAdmin.GetAllprobHeader().subscribe(success=>{
        this.problemJoin=success;
        console.log("got sources");
    },err=>{
        console.log(err);
    })
  }

  AddHeader(){
    this.router.navigate(['/AddprobHeader']);
  }

  EditprobType(proptypeID:number){
   // this.router.navigate(['/editprobType',proptypeID]);
  }

  DeleteProblemHeader(idd:number){
  this.servAdmin.DeleteprobHeader(idd).subscribe(succs=>{
      console.log("deleted");
  },erro=>{
    console.log(erro);
  })

  this.servAdmin.GetAllprobHeader().subscribe(success=>{
    this.problemJoin=success;
    console.log("got sources");
},err=>{
    console.log(err);
})
}
}

