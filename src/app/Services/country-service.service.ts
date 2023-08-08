import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../Models/City';
import { Country } from '../Models/Country';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  ;

  apiURL="http://localhost:5067/api/Countries/"

  constructor(private http:HttpClient) 
  { 
  }  
  getAllCountries(){
    return this.http.get<Country[]>(this.apiURL+"GetAllCountries").pipe(map(res=>{
       return res
    }))
  }
  getEachCountryData(countryId:string){
    return this.http.get<City[]>(this.apiURL+"GetCasesByCountryId/"+countryId).pipe(map(res=>{
        return res
    }))
  }

}
