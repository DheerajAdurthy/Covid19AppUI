import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LoginUser } from '../Models/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  apiUrl="http://localhost:5067/api/Register/";
  constructor(private http:HttpClient) { }

  loginUser(formData:LoginUser){
      return this.http.post<any>(this.apiUrl+"Login",formData)
  }
}
