import { problemJoin } from './../../../models/problems/problemJoin';
import { FprobContentModel } from './../../../models/problems/FproblemContent';
import { probContentModel } from './../../../models/problems/problemContent';
import { probHeaderModel } from './../../../models/problems/problemHeader';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-problem-content-add',
  templateUrl: './problem-content-add.component.html',
  styleUrls: ['./problem-content-add.component.css']
})
export class ProblemContentAddComponent implements OnInit {

  ProbSourceForm: FormGroup;
  propTypeId;
  buttontitle: string;
  title: string;
  isEditMode: boolean
  constructor(private fb: FormBuilder, private servAdmin: AdminService) { }

  probContentModel:probContentModel;

  FprobContentModel:FprobContentModel;
  problemJoin:problemJoin[];

  ngOnInit(): void {

    this.probContentModel=null;
    this.FprobContentModel=null;
    this.problemJoin=null;

    this.buttontitle = "";
    this.title = "";

    this.probContentModel = {
      contentProblemName:'',
      contentProblemDescription:'',
      contentproblemImage:'',
      code:null,
      date:'',
      problemHeaderID:-1,
    }

    this.FprobContentModel = {
      contentProblemid:-1,
      contentProblemName:'',
      contentProblemDescription:'',
      contentproblemImage:'',
      code:null,
      date:'',
      problemHeaderID:-1,
    }

    this.ProbSourceForm = this.fb.group({
      ContentName: ['', Validators.required],
      ContentDesc: ['', Validators.required],
      ContentIamge: ['', Validators.required],
      ContentDate: ['', Validators.required],
      ContentCode: ['', Validators.required],
      HeaderSelect: ['', Validators.required]
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
    this.servAdmin.GetAllprobHeader().subscribe(success=>{
      this.problemJoin=success;
      console.log("got sources");
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

  addProbContent() {

    // if (this.ProbSourceForm.valid  ContentName: ['', Validators.required],

      this.probContentModel = {

        contentProblemName:this.ProbSourceForm.value.ContentName,
        contentproblemImage:this.ProbSourceForm.value.ContentIamge,
        contentProblemDescription:this.ProbSourceForm.value.ContentDesc,
        code:this.ProbSourceForm.value.ContentCode,
        date:this.ProbSourceForm.value.ContentDate,
        problemHeaderID:parseInt(this.ProbSourceForm.value.HeaderSelect)

      }

      console.log(typeof(this.ProbSourceForm.value.headerDate));
      this.servAdmin.AddprobContent(this.probContentModel).subscribe(success => {
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
