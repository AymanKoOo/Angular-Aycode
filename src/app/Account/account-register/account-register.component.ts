import { usersModel } from './../../models/users-models';
import { RegisterServiceService } from './../../services/register-service.service';
import { RegisterModel } from './../../models/register-models';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:RegisterServiceService,private router:Router) { }

  userForm : FormGroup;
  reg: RegisterModel;
  users:usersModel[];
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
  ngOnInit() {

    this.reg={
      userName:'',
      email:'',
      password:''
    };

    this.users=[];

    this.userForm = this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(6)]],
      paswordConfirm:['',[Validators.required,Validators.maxLength(6)]]
    });

   // this.getAllUsers();

  }
  register(){

    if(this.userForm.valid){
      this.validRegisterModel();
      this.service.Register(this.reg).subscribe(sucess=>{

        console.log(sucess);


      },error=>{
        console.log(error);
        this.router.navigate(['/login']);
      });
    }
  }

  validRegisterModel() {
    this.reg.userName=this.userForm.value.userName;
    this.reg.email=this.userForm.value.email;
    this.reg.password=this.userForm.value.password;
  }

  isPasswordMatch(){
    if(this.userForm.value.password!==''&&this.userForm.value.paswordConfirm!==''){
      if(this.userForm.value.password!==this.userForm.value.paswordConfirm){
        return true
      }
    }
    return false;
  }

  // getAllUsers(){

  //   this.service.GetAllUsers().subscribe(list=>{
  //     this.users = list;//it returns list
  //     console.log(this.users);
  //   },err=>alert(err.error));
  // }

  IsUserNameExist(){
      const name = this.userForm.value.userName;
      if(name!=null && name!='' && this.userForm.get('userName').touched){
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
    if(email!=null && email!='' && this.userForm.get('email').touched){
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
}
