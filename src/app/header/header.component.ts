import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../Services/login-status.service';
import {Observable,BehaviorSubject} from 'rxjs'
import { LoginUserService } from '../Services/login-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus:boolean;
  userName:string;
  constructor(private loginStatusService:LoginStatusService,public loginService:LoginUserService) 
  { 
    this.userName=localStorage.getItem('username')
  }

  ngOnInit(){
    /*  this.loginStatusService.isLoggedIn.subscribe(res=>{
       if(res){
         if(localStorage.getItem('userToken')){
          this.loginStatus=true
         }
       }else{
         this.loginStatus=false
       }
       console.log(this.loginStatus)
     }) */
  }
  userLogOut(){
    this.loginStatusService.logOut()
  }
}
