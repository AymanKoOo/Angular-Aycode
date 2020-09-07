import { problemTypeModel } from './../../../models/problems/problemType';
import { FproblemTypeModel } from './../../../models/problems/FproblemType';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-type-add',
  templateUrl: './problem-type-add.component.html',
  styleUrls: ['./problem-type-add.component.css']
})
export class ProblemTypeAddComponent implements OnInit {
  ProbSourceForm: FormGroup;
  propTypeId;
  buttontitle: string;
  title: string;
  isEditMode: boolean
  constructor(private fb: FormBuilder, private servAdmin: AdminService, private activateRoute: ActivatedRoute) { }

  FproblemTypeModel : FproblemTypeModel;
  problemTypeModel:problemTypeModel;
  ngOnInit(): void {

    this.FproblemTypeModel=null;
    this.problemTypeModel=null;
    this.buttontitle = "";
    this.title = "";

    this.problemTypeModel = {
      problemTypee:'',
      problemTypeImage:'',
      problemTDescription:'',
    }

    this.FproblemTypeModel = {
      problemTypeID:0,
      problemTypee:'',
      problemTypeImage:'',
      problemTDescription:'',
    }

    this.ProbSourceForm = this.fb.group({
      problemTypee: ['', Validators.required],
      problemTypeImage: ['', Validators.required],
      problemTDescription: ['', Validators.required],
    });

    this.activateRoute.paramMap.subscribe(param => {
      this.propTypeId= parseInt(param.get('proptypeID'));

      if (this.propTypeId) {
        this.servAdmin.GetprobSType(this.propTypeId).subscribe(succ => {
          this.FproblemTypeModel = succ;
          this.buttontitle = "Edit";
          this.title = "Edit Problem Type ";
          this.isEditMode = true;
          this.AddTypeData();
        }, err => {
          console.log(err);
        })
      }
    })
  }

  AddTypeData() {
    if (this.FproblemTypeModel != null) {

      this.ProbSourceForm.setValue({
        problemTypee: this.FproblemTypeModel.problemTypee,
        problemTDescription: this.FproblemTypeModel.problemTDescription,
        problemTypeImage: this.FproblemTypeModel.problemTypeImage,
      });
    }
  }
  addProbType() {

    if (this.ProbSourceForm.valid && !this.isEditMode) {

      this.problemTypeModel = {
        problemTypee: this.ProbSourceForm.value.problemTypee,
        problemTDescription: this.ProbSourceForm.value.problemTDescription,
        problemTypeImage: this.ProbSourceForm.value.problemTypeImage,
      }

      this.servAdmin.AddprobType(this.problemTypeModel).subscribe(success => {
        console.log("Added");
      }, err => {
        console.log(err);
      })
    }
    else{
      console.log("edit");
      console.log(this.propTypeId);
      this.FproblemTypeModel.problemTypeID=this.propTypeId;
      this.FproblemTypeModel.problemTypee=this.ProbSourceForm.value.problemTypee;
      this.FproblemTypeModel.problemTDescription=this.ProbSourceForm.value.problemTDescription;

      this.FproblemTypeModel.problemTypeImage=this.ProbSourceForm.value.problemTypeImage;

      this.servAdmin.EditprobType(this.FproblemTypeModel).subscribe(succ=>{

        console.log("done");

      },err=>{
          console.log(err);
      })
    }
  }
  IsourceNameExist() {

  }
}
