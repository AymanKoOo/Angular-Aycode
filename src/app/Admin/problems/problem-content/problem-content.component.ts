import { probContentModel } from './../../../models/problems/problemContent';
import { contentJoinModel } from './../../../models/problems/contentJoin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

import {FprobContentModel} from 'src/app/models/problems/FproblemContent';

@Component({
  selector: 'app-problem-content',
  templateUrl: './problem-content.component.html',
  styleUrls: ['./problem-content.component.css']
})
export class ProblemContentComponent implements OnInit {


  constructor(private fb:FormBuilder,private servAdmin : AdminService,private router: Router) { }
  popoverTitle:string;
  popoverMessage:string;
  probContentModel:[];

  contentJoinModel:contentJoinModel[];
  ngOnInit() {
    this.probContentModel=null;

    this.contentJoinModel=null;
    this.servAdmin.GetAllprobContent().subscribe(success=>{
        this.contentJoinModel=success;
        console.log("got sources");
    },err=>{
        console.log(err);
    })
  }

  AddContent(){
    this.router.navigate(['/AddprobContent']);
  }
  EditprobType(proptypeID:number){
   // this.router.navigate(['/editprobType',proptypeID]);
  }

  DeleteProblemHeader(idd:number){
  this.servAdmin.DeleteprobContent(idd).subscribe(succs=>{
      console.log("deleted");
  },erro=>{
    console.log(erro);
  })
}
}

