import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../Services/login-status.service';
import {Observable,BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus:boolean;
  constructor(private loginStatusService:LoginStatusService) 
  { 
  }

  ngOnInit(){
     this.loginStatusService.isLoggedIn.subscribe(res=>{
       if(res){
         if(localStorage.getItem('userToken')){
          this.loginStatus=true
         }
       }else{
         this.loginStatus=false
       }
       console.log(this.loginStatus)
     })
  }
  userLogOut(){
    this.loginStatusService.logOut()
    this.loginStatusService.isLoggedIn.unsubscribe();
  }
}
