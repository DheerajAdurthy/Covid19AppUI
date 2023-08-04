import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject , Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  
  isLoggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(this.hasToken());
  apiUrl="http://localhost:5067/api/Register/";

  constructor(private router:Router,private http:HttpClient) { 
  }

  hasToken():boolean{
   return !!localStorage.getItem('userToken')
  }

  login(userId:string,userToken:string){
    this.isLoggedIn.next(true)
    localStorage.setItem('userToken',userToken)
    localStorage.setItem('userId',userId)
    this.router.navigate(['dashboard'])
  }

  logOut(){
    this.http.post(this.apiUrl+"LogOut/"+localStorage.getItem('userId'),null).subscribe(res=>{
      console.log(res)
    })
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    this.router.navigate(['register'])
  }
}
