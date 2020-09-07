
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { probSourceModel } from 'src/app/models/problems/problemSource';
import { ActivatedRoute } from '@angular/router';
import { FprobSourceModel } from 'src/app/models/problems/FproblemSource';

@Component({
  selector: 'app-problem-source-add',
  templateUrl: './problem-source-add.component.html',
  styleUrls: ['./problem-source-add.component.css']
})
export class ProblemSourceAddComponent implements OnInit {

  ProbSourceForm: FormGroup;
  private ProbSourceModel: probSourceModel;
  sourceId;

  buttontitle: string;
  title: string;
  isEditMode: boolean
  constructor(private fb: FormBuilder, private servAdmin: AdminService, private activateRoute: ActivatedRoute) { }
  probSources: probSourceModel;
  FprobSources : FprobSourceModel;
  ngOnInit(): void {
    this.probSources = null;
    this.FprobSources=null;
    this.buttontitle = "";
    this.title = "";
    this.ProbSourceModel = {
      sourceName: '',
      sourceDescription: '',
      problemSourceImage: '',
    }
    this.FprobSources={
      problemSourceID:0,
      sourceName: '',
      sourceDescription: '',
      problemSourceImage: '',
    }

    this.ProbSourceForm = this.fb.group({
      sourceName: ['', Validators.required],
      sourceImage: ['', Validators.required],
      sourceDesc: ['', Validators.required],
    });

    this.activateRoute.paramMap.subscribe(param => {
      this.sourceId = parseInt(param.get('sourceId'));

      if (this.sourceId) {
        this.servAdmin.GetprobSource(this.sourceId).subscribe(succ => {
          console.log(typeof this.sourceId);
          this.FprobSources = succ;
          this.buttontitle = "Edit";
          this.title = "Edit Problem Source ";
          this.isEditMode = true;
          this.AddsourceData();
        }, err => {
          console.log(err);
        })
      }
    })
  }

  AddsourceData() {
    if (this.FprobSources != null) {

      console.log("edditt");
      this.ProbSourceForm.setValue({
        sourceName: this.FprobSources.sourceName,
        sourceDesc: this.FprobSources.sourceDescription,
        sourceImage: this.FprobSources.problemSourceImage,
      });
    }
  }
  addProbSource() {

    if (this.ProbSourceForm.valid && !this.isEditMode) {

      this.ProbSourceModel = {
        sourceName: this.ProbSourceForm.value.sourceName,
        sourceDescription: this.ProbSourceForm.value.sourceDesc,
        problemSourceImage: this.ProbSourceForm.value.sourceImage,
      }

      this.servAdmin.AddprobSource(this.ProbSourceModel).subscribe(success => {
        console.log("Added");
      }, err => {
        console.log(err);
      })
    }
    else{
      console.log("edit");
        this.FprobSources.problemSourceID=this.sourceId;

      this.FprobSources.sourceName=this.ProbSourceForm.value.sourceName;
      this.FprobSources.sourceDescription=this.ProbSourceForm.value.sourceDesc;

      this.FprobSources.problemSourceImage=this.ProbSourceForm.value.sourceImage;



      // this.FprobSources = {
      //   problemSourceID:this.sourceId,
      //   sourceName: this.ProbSourceForm.value.sourceName,
      //   sourceDescription: this.ProbSourceForm.value.sourceDesc,
      //   problemSourceImage: this.ProbSourceForm.value.sourceImage,
      // }

      this.servAdmin.EditprobSource(this.FprobSources).subscribe(succ=>{

        console.log("done");

      },err=>{
          console.log(err);
      })
    }
  }
  IsourceNameExist() {

  }



}
