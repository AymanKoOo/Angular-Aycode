import { probHeaderModel } from './../../../models/problems/problemHeader';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FproblemTypeModel } from './../../../models/problems/FproblemType';
import { FprobHeaderModel } from 'src/app/models/problems/FproblemHeader';
import { FprobSourceModel } from 'src/app/models/problems/FproblemSource';

@Component({
  selector: 'app-problem-header-add',
  templateUrl: './problem-header-add.component.html',
  styleUrls: ['./problem-header-add.component.css']
})
export class ProblemHeaderAddComponent implements OnInit {

  ProbSourceForm: FormGroup;
  propTypeId;
  buttontitle: string;
  title: string;
  isEditMode: boolean
  constructor(private fb: FormBuilder, private servAdmin: AdminService, private activateRoute: ActivatedRoute) { }

  probSources:FprobSourceModel[];
  probType:FproblemTypeModel[];

  FprobHeaderModel:FprobHeaderModel;
  probHeaderModel:probHeaderModel;

  ngOnInit(): void {

    this.FprobHeaderModel=null;
    this.probHeaderModel=null;
    this.probSources=null;
    this.probType=null;
    this.buttontitle = "";
    this.title = "";

    this.probHeaderModel = {
      problemName:'',
      problemDescription:'',
      problemImage:'',
      date:null,
      problemSourceID:-1,
      problemTypeID:-1,
    }

    this.FprobHeaderModel = {
      problemid:-1,
      problemName:'',
      problemDescription:'',
      problemImage:'',
      date:null,
      problemSourceID:-1,
      problemTypeID:-1,
    }

    this.ProbSourceForm = this.fb.group({
      headerName: ['', Validators.required],
      headerDesc: ['', Validators.required],
      headerIamge: ['', Validators.required],
      headerDate: ['', Validators.required],
      sourceSelect: ['', Validators.required],
      typeSelect: ['', Validators.required]
    });

    // this.activateRoute.paramMap.subscribe(param => {
    //   this.propTypeId= parseInt(param.get('proptypeID'));

    //   if (this.propTypeId) {
    //     this.servAdmin.GetAllprobHeader(this.propTypeId).subscribe(succ => {
    //       this.FprobHeaderModel = succ;
    //       this.buttontitle = "Edit";
    //       this.title = "Edit Problem Type ";
    //       this.isEditMode = true;
    //       this.AddTypeData();
    //     }, err => {
    //       console.log(err);
    //     })
    //   }
    // })

////////////////////////////////////////////////////
    this.servAdmin.GetAllprobSource().subscribe(success=>{
      this.probSources=success;
      console.log("got sources");
      },err=>{
          console.log(err);
      })

    ///Get alll Type Data////

    this.servAdmin.GetAllprobType().subscribe(success=>{
        this.probType=success;
        console.log("got type");
    },err=>{
        console.log(err);
    })

  }

  // AddTypeData() {
  //   if (this.FprobHeaderModel != null) {

  //     this.ProbSourceForm.setValue({
  //       problemTypee: this.FproblemTypeModel.problemTypee,
  //       problemTDescription: this.FproblemTypeModel.problemTDescription,
  //       problemTypeImage: this.FproblemTypeModel.problemTypeImage,
  //     });
  //   }
  // }

  addProbHeader() {

    // if (this.ProbSourceForm.valid && !this.isEditMode) {

      this.probHeaderModel = {
        problemName:this.ProbSourceForm.value.headerName,
        problemDescription:this.ProbSourceForm.value.headerDesc,
        problemImage:this.ProbSourceForm.value.headerIamge,
        date:this.ProbSourceForm.value.headerDate,
        problemSourceID:parseInt(this.ProbSourceForm.value.sourceSelect),
        problemTypeID:parseInt(this.ProbSourceForm.value.typeSelect)
      }

      console.log(typeof(this.ProbSourceForm.value.headerDate));
      this.servAdmin.AddprobHeader(this.probHeaderModel).subscribe(success => {
        console.log("Added");
      }, err => {
        console.log(err);
      })
    }
    // else{
    //   console.log("edit");
    //   console.log(this.propTypeId);
    //   this.FproblemTypeModel.problemTypeID=this.propTypeId;
    //   this.FproblemTypeModel.problemTypee=this.ProbSourceForm.value.problemTypee;
    //   this.FproblemTypeModel.problemTDescription=this.ProbSourceForm.value.problemTDescription;

    //   this.FproblemTypeModel.problemTypeImage=this.ProbSourceForm.value.problemTypeImage;

    //   this.servAdmin.EditprobType(this.FproblemTypeModel).subscribe(succ=>{

    //     console.log("done");

    //   },err=>{
    //       console.log(err);
    //   })
    // }
  }
  // IsourceNameExist() {

  // }

  ////Get alll Source Data////


