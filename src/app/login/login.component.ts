import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginUser } from '../Models/LoginUser';
import { ResponseData } from '../Models/ResponseData';
import { LoginUserService } from '../Services/login-user.service';
import { Output, EventEmitter } from '@angular/core';
import { LoginStatusService } from '../Services/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginError:string=""
  errorRes:boolean=false;
  loginUser=new LoginUser();
  responseDetails=new ResponseData();

  constructor(private fb:FormBuilder,private loginService:LoginUserService,private router:Router,private userLogInService:LoginStatusService) { }

  ngOnInit(){
    this.loginForm=this.fb.group({
      username: ['', Validators.required],
      password:['',[Validators.required]],
  });
  }
  onSubmit(form:FormGroup){
    if(form.valid){
          this.loginUser.userName=form.value.username
          this.loginUser.password=form.value.password
          this.loginService.loginUser(this.loginUser).subscribe(responseData=>{
            localStorage.setItem('username',responseData.userName)
          },(error)=>{
              this.errorRes=true
              this.loginError=error.error
              localStorage.clear()
          })
    }
  }
}
