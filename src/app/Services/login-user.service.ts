import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LoginUser } from '../Models/LoginUser';
import {map} from 'rxjs/operators'
import { ResponseData } from '../Models/ResponseData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  apiUrl="http://localhost:5067/api/Register/";
  constructor(private http:HttpClient,private router:Router) { }

  loginUser(formData:LoginUser){
      return this.http.post<ResponseData>(this.apiUrl+"Login",formData).pipe(map((res:any)=>{
        if(res && res.token){
          localStorage.setItem('userToken',res.token)
          localStorage.setItem('userId',res.userId)
          localStorage.setItem('role',res.role)
          this.router.navigate(['dashboard']);
        }
        return res;
      }))
  }

  isLoggedIn(){
    return !!localStorage.getItem('userToken');
  }

  isAdmin(){
    if(localStorage.getItem('role')=='admin'){
      return true
    }
    else{
      return false
    }
  }
}
