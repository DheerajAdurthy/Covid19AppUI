import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCaseComponent } from './add-case/add-case.component';
import { BodyComponent } from './body/body.component';
import { CasesInCitiesComponent } from './cases-in-cities/cases-in-cities.component';
import { ContactComponent } from './contact/contact.component';
import { CountryCardsComponent } from './Countries/country-cards.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MetadataComponent } from './metadata/metadata.component';
import { OverallDataComponent } from './OverallCountryDetails/overall-data.component';
import {AuthguardGuard} from './shared/authguard.guard'
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:'about',component:MetadataComponent},
  {path:'',component:LandingPageComponent,pathMatch:'full'},
  {path:'register',component:BodyComponent},
  {path:'dashboard',component:CountryCardsComponent,canActivate:[AuthguardGuard]},
  {path:'totalData/:countryId',component:OverallDataComponent,canActivate:[AuthguardGuard]},
  {path:'casesInCities/:cityId',component:CasesInCitiesComponent,canActivate:[AuthguardGuard]},
  {path:'contact',component:ContactComponent},  
  {path:'wishlist',component:WishListComponent,canActivate:[AuthguardGuard]},
  {path:'addform',component:AddCaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
