import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { RegisterUser } from '../Models/Registeruser';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  apiUrl="http://localhost:5067/api/Register/";

  constructor(private http:HttpClient) { }

  registerUser(formData:RegisterUser){
       return this.http.post(this.apiUrl+"Register",formData)
  }
}
