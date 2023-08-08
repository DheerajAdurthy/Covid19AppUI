import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject , Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  
  apiUrl="http://localhost:5067/api/Register/";

  isUserLoggedOut:boolean=false;

  constructor(private router:Router,private http:HttpClient) { 
  }
  logOut(){
    this.http.post(this.apiUrl+"LogOut/"+localStorage.getItem('userId'),null).subscribe(res=>{
      console.log(res)
    })
    localStorage.clear()
    this.isUserLoggedOut=true
    this.router.navigate(['register'])
  }
  isLoggedOut():boolean{
      return this.isUserLoggedOut
  }
}
