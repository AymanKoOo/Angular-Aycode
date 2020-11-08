import { AuthService } from './../../services/auth.service';
import { RegisterServiceService } from './../../services/register-service.service';
import { usersModel } from './../../models/users-models';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { loginModel } from './../../models/login-models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:RegisterServiceService,private aut:AuthService,private router:Router) { }

  logMod:loginModel
  userForm : FormGroup;
  users:usersModel[];
  private route:Router;

  token : string;
  messageValidate={

    email:{
      required:'Enter Email',
      notValid:'This is not email',
      emailFound:'Enter unique email'
    },

    password:{
      required:'Enter Password'
    }
  }

  ngOnInit(): void {

    if(localStorage.getItem('token')!=null){
       this.router.navigate(['/home']);
    }

    this.users=[];
    this.logMod={
      email:'',
      passowrd:'',
      rembeberMe:false,
      token:''
    }
    this.userForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      passowrd:['',[Validators.required,Validators.maxLength(6)]],
      rembeberMe:false
    });

  }

  // login(){
  //   if(this.userForm.valid){
  //     this.validlogin();
  //     console.log(this.userForm);
  //     this.service.UserLogin(this.logMod).subscribe(sucess=>{

  //     const email = this.userForm.value.email;
  //     const rem = this.userForm.value.rembeberMe;
  //     this.aut.installStorage(rem,email);
  //     console.log("logged");
  //     },error=>console.log(error));
  //   }
  // }

  loginJwt(){

   if(this.userForm.valid){
      this.validlogin();
      //console.log(this.userForm);
      this.service.UserLoginJWT(this.logMod).subscribe(sucess=>{
       localStorage.setItem('token',sucess.token)

      this.router.navigate(['/home']);
      },error=>console.log(error));

  }
}

  validlogin() {
    this.logMod.email=this.userForm.value.email;
    this.logMod.passowrd=this.userForm.value.passowrd;
    this.logMod.rembeberMe=this.userForm.value.rembeberMe;
  }
}
