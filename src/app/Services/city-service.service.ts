import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Case } from '../Models/Cases';
import { City } from '../Models/City';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  apiURL="http://localhost:5067/api/Countries/"
  constructor(private http:HttpClient) { }

  getCasesIncities(cityId:string){
    return this.http.get<Case[]>(this.apiURL+"GetCasesByCityId/"+cityId)
  }
}
