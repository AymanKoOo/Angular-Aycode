import { EditUserModel } from './../../models/editUserModel';
import { Observable } from 'rxjs';
import { userModel } from './../../models/user-model';

import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { usersModel } from 'src/app/models/users-models';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router,private fb:FormBuilder,
    private adminSr:AdminService,private service:RegisterServiceService,private activateRoute:ActivatedRoute) { }
    isEditMode:boolean;
    userForm : FormGroup;
    user: userModel;
    users:usersModel[];
    userData:usersModel;
    title:string;
    buttontitle:string;
    editUserData:EditUserModel;
    id:string;
    messageValidate={
      userName:{
        required:'Enter User Name',
        userFound:'Enter unique UserName'
      },

      email:{
        required:'Enter Email',
        notValid:'This is not email',
        emailFound:'Enter unique email'
      },

      password:{
        required:'Enter Password'
      },
      passwordConfirm:{
        required:'Enter Confirm Password',
        isMatch:'Password doesnt match'
      }
    }

  ngOnInit(){
   
    this.buttontitle="Add new user";
    this.title="register;"
    this.userData=null;
    this.isEditMode=false;
    this.editUserData={
      id:'',
      email:'',
      userName:'',
      password:'',
      emailConfirmed:false,
      country:'',
      phoneNumber:'',
    }
    this.id='';
    this.user={
      userName:'',
      email:'',
      password:'',
      emailConfirmed:false,
      phoneNumber:'',
      country:''
    };

    this.users=null;

    this.activateRoute.paramMap.subscribe(param=>{
      var id=param.get('id');
      if(id){

        this.adminSr.EditUser(id).subscribe(succ=>{
        this.userData = succ;
        this.buttontitle="Edit user";
        this.title="Edit";
        this.isEditMode=true;
        this.AddUserData();
        this.id=id;
        },err=>{
          console.log(err);
        })

      }
    },)
    this.userForm = this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:'',
      password:['',[Validators.required,Validators.maxLength(6)]],
      paswordConfirm:['',[Validators.required,Validators.maxLength(6)]],
      emailConfirmed:false,
      country:''
    });

  }

  AddUserData(){
    if(this.userData!=null){
      console.log(this.userData);
      this.userForm.setValue({
        userName:this.userData.userName,
        email:this.userData.email,
        phoneNumber:this.userData.phoneNumber,
        emailConfirmed:this.userData.emailConfirmed,
        country:this.userData.country,
        password:this.userData.passwordHash,
        paswordConfirm:this.userData.passwordHash,
      });
    }
  }
  AddUser(){
    if(this.userForm.valid && !this.isEditMode){
      this.isEditMode=false;
      this.user.country = this.userForm.value.country;

      this.user.userName = this.userForm.value.userName;

      this.user.password = this.userForm.value.password;

      this.user.phoneNumber = this.userForm.value.phoneNumber;

      this.user.emailConfirmed = this.userForm.value.emailConfirmed;

      this.user.email = this.userForm.value.email;
      console.log(this.user);

      this.adminSr.AddUsers(this.user).subscribe(s=>{
        console.log("added");
      },err=>{
        console.log(err);
      })
    }
    else{
      this.editUserData.id=this.id;

      this.editUserData.userName=this.userForm.value.userName;
      this.editUserData.email=this.userForm.value.email;

      this.editUserData.password=this.userForm.value.password;


      this.editUserData.emailConfirmed=this.userForm.value.emailConfirmed;

      this.editUserData.country=this.userForm.value.country;
      this.editUserData.phoneNumber=this.userForm.value.phoneNumber;



      this.adminSr.EditUseRTwo(this.editUserData).subscribe(succ=>{

        console.log("done");

      },err=>{
          console.log(err);
      })

    }
  }

  IsUserNameExist(){
    const name = this.userForm.value.userName;
    if(name!=null && name!='' && this.userForm.get('userName').touched&&!this.isEditMode){
      this.service.IsUserNameExist(name).subscribe(success=>{
        console.log("user name exist")
        this.messageValidate.userName.userFound="user name used"
      },ex=>console.log(ex));
      return true;
    }
    else{
      this.messageValidate.userName.userFound=null;
    }
  return false;
}

IsEmailExist(){
  const email = this.userForm.value.email;
  if(email!=null && email!='' && this.userForm.get('email').touched&&!this.isEditMode){
    this.service.IsEmailExist(email).subscribe(success=>{
      console.log("email exist")

      this.messageValidate.email.emailFound="email used"
    },ex=>console.log(ex));
    return true;
  }
  else{
    this.messageValidate.email.emailFound=null;
  }
return false;
}

isPasswordMatch(){
  if(this.userForm.value.password!==''&&this.userForm.value.paswordConfirm!==''){
    if(this.userForm.value.password!==this.userForm.value.paswordConfirm){
      return true
    }
  }
  return false;
}


}
