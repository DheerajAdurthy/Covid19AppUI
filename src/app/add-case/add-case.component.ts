import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import { AddCase, Case } from '../Models/Cases';
import { City } from '../Models/City';
import { Country } from '../Models/Country';
import { AddCaseService } from '../Services/add-case.service';
import { CityServiceService } from '../Services/city-service.service';
import { CountryServiceService } from '../Services/country-service.service';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css']
})
export class AddCaseComponent implements OnInit {

  countryCityForm: FormGroup;
  form: FormGroup;
  addCaseFrom=new AddCase()
  cityErrorMsg:string;

  countries: Country[] ; // Replace with your list of countries
  cities: City[] ; // Initialize an empty array for cities    

  constructor(private formBuilder: FormBuilder,private countryService:CountryServiceService,private cityService:CityServiceService,private addCaseService:AddCaseService) { }

  ngOnInit(){
    this.countryService.getAllCountries().subscribe(res=>{
      this.countries=res
    })
    this.countryCityForm = this.formBuilder.group({
            country: ['', [Validators.required]],
            city: ['', [Validators.required]],
          });
          this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            age: [null, [Validators.required, Validators.min(0), Validators.max(150)]],
            status: ['active'], // We'll use "status" for dead/alive/cured selection
            date: [null, [Validators.required]]
    });
  }

  onSubmit() {
        if (this.countryCityForm.valid)
        {
          if(this.form.valid) 
          {
            this.addCaseFrom.personName=this.form.value.name
            this.addCaseFrom.age=this.form.value.age
            this.addCaseFrom.dateRegistered=this.form.value.date as string
            this.addCaseFrom.countryId=this.countryCityForm.value.country
            this.addCaseFrom.cityId=this.countryCityForm.value.city
            if(this.form.value.status=="active"){
              this.addCaseFrom.active=true
              this.addCaseFrom.dead=false
              this.addCaseFrom.cured=false
            }
            else if(this.form.value.status=="dead"){
              this.addCaseFrom.active=false
              this.addCaseFrom.dead=true
              this.addCaseFrom.cured=false
            }
            else if(this.form.value.status="cured"){
              this.addCaseFrom.active=false
              this.addCaseFrom.dead=false
              this.addCaseFrom.cured=true
            }
            this.addCaseService.addCase(this.addCaseFrom).subscribe(res=>console.log(res))
          }   
        }
  }

  onCountryChange() {
        const selectedCountry = this.countryCityForm.value.country;
        // Replace with your logic to fetch cities based on the selected country
        // For simplicity, let's assume we have some predefined cities for each country
        this.countryService.getEachCountryData(selectedCountry).subscribe(res=>this.cities=res,error=>this.cityErrorMsg=error.error)
  }
      
}
