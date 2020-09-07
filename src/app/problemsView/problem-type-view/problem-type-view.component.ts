import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { problemTypeModel } from 'src/app/models/problems/problemType';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-problem-type-view',
  templateUrl: './problem-type-view.component.html',
  styleUrls: ['./problem-type-view.component.css']
})
export class ProblemTypeViewComponent implements OnInit {

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router) { }
  probTypes:problemTypeModel[];
  sourceName:string;
  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe(param=>{
      var sourceName=param.get('source');
      if(sourceName){
        this.sourceName=sourceName;
      }
    },err=>console.log(err));

    this.GetproSource();

  }

  GetproSource(){
    this.service.GetAllprobType().subscribe(sucess=>{
      this.probTypes=sucess;
      console.log(this.probTypes);
    },err=>{
      console.log(err);
    })
  }

  passSnSt(sourceType){
    this.router.navigate(['/passSnSt',sourceType,this.sourceName]);
  }
}
