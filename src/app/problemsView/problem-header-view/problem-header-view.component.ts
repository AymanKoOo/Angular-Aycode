
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetHeaderFromJoin } from 'src/app/models/GetHeaderFromJoin';

@Component({
  selector: 'app-problem-header-view',
  templateUrl: './problem-header-view.component.html',
  styleUrls: ['./problem-header-view.component.css']
})
export class ProblemHeaderViewComponent implements OnInit {

  constructor(private service:AdminService,private activateRoute:ActivatedRoute,private router:Router) { }

  GetHeaderFromJoin:GetHeaderFromJoin[];

  ngOnInit(): void {
  console.log("aa");
    this.GetHeaderFromJoin=null;

    this.activateRoute.paramMap.subscribe(param=>{
      var sourceName=param.get('sourceName');
      var sourceType=param.get('sourceType');
      this.GetproSource(sourceType,sourceName);
      if(sourceName&&sourceType){
        console.log(sourceName);
        console.log(sourceType);
      }
    },)
  }

  GetproSource(sourceType,sourceName,){
      this.service.GetprobHeaderJ(sourceType,sourceName).subscribe(sucess=>{
        this.GetHeaderFromJoin = sucess;
        console.log(sucess);
    },err=>{
        console.log(err);
    })
  }

  getContent(ProblemName:string){
    this.router.navigate(['/getContent',ProblemName]);
  }

}
