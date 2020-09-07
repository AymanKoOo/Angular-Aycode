import { probSourceModel } from './../../../models/problems/problemSource';
import { HttpClient } from '@angular/common/http';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FprobSourceModel } from 'src/app/models/problems/FproblemSource';

@Component({
  selector: 'app-problem-source',
  templateUrl: './problem-source.component.html',
  styleUrls: ['./problem-source.component.css']
})
export class ProblemSourceComponent implements OnInit {
  adminServ: any;
  IndexeddbService: any;

  constructor(private fb:FormBuilder,private servAdmin : AdminService,private router: Router) { }
  popoverTitle:string;
  popoverMessage:string;
  probSources:FprobSourceModel[];
  ngOnInit() {
    this.probSources=null;
    this.servAdmin.GetAllprobSource().subscribe(success=>{
        this.probSources=success;
        console.log("got sources");
    },err=>{
        console.log(err);
    })
  }

  AddSoruce(){
    this.router.navigate(['/AddprobSource']);
  }
  EditprobSource(sourceId:number){
    this.router.navigate(['/editprobSource',sourceId]);
  }


  DeleteProblemSource(idd:number){
  this.servAdmin.DeleteprobSource(idd).subscribe(succs=>{
      console.log("deleted");
  },erro=>{
    console.log(erro);
  })

  this.servAdmin.GetAllprobSource().subscribe(success=>{
    this.probSources=success;
    console.log("got sources");
},err=>{
    console.log(err);
})
}
}
