import { Component, OnInit } from '@angular/core';
import { Country } from '../Models/Country';
import { CountryServiceService } from '../Services/country-service.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.css']
})
export class CountryCardsComponent implements OnInit {
  toggle=false;
  value:string=''
  demo:Country[];
  term:string;
  private unsubscriber : Subject<void> = new Subject<void>();


  constructor(private countryService: CountryServiceService) {
  }

  ngOnInit(){
    this.countryService.getAllCountries().subscribe(res=>{
          this.demo=res
    })
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
    });
  }



toggleBookmark(){
    console.log(this.toggle);
 if(this.toggle==false){
  this.toggle=true;
  return;
 }
 this.toggle=false;
  }

  ngOnDestroy(){
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
