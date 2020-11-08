import { problemTypeModel } from './../../models/problems/problemType';
import { probSourceModel } from './../../models/problems/problemSource';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-type',
  templateUrl: './problem-type.component.html',
  styleUrls: ['./problem-type.component.css']
})
export class ProblemTypeeComponent implements OnInit {

  constructor(private service:AdminService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {



  }
  GetproSource(){

  }

}
