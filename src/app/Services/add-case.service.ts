import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCase } from '../Models/Cases';

@Injectable({
  providedIn: 'root'
})
export class AddCaseService {

  apiURL="http://localhost:5067/api/Countries/"

  constructor(private http:HttpClient) { }

  addCase(caseData:AddCase){
    return this.http.post(this.apiURL+"AddCaseByAdmin",caseData);
  }
}
