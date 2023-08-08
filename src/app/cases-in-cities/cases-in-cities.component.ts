import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Case } from '../Models/Cases';
import { CityServiceService } from '../Services/city-service.service';

@Component({
  selector: 'app-cases-in-cities',
  templateUrl: './cases-in-cities.component.html',
  styleUrls: ['./cases-in-cities.component.css']
})
export class CasesInCitiesComponent implements OnInit {
  
  cityId:string
  casesNotFound:string;
  cases:Case[];
  constructor(private route:ActivatedRoute,private caseService:CityServiceService) { }

  ngOnInit(){
   this.route.params.subscribe((params:Params)=>{
     this.cityId=params['cityId']
   })
   this.caseService.getCasesIncities(this.cityId).subscribe(res=>this.cases=res,error=>this.casesNotFound=error.error)
  }

}
