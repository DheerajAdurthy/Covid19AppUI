import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MetadataComponent } from './metadata/metadata.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RegisterComponent} from './Register/register.component';
import { LoginComponent } from './login/login.component'
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'
import {OverallDataComponent } from './OverallCountryDetails/overall-data.component';
import { CasesInCitiesComponent } from './cases-in-cities/cases-in-cities.component';
import { ContactComponent } from './contact/contact.component'
import {CountryCardsComponent} from './Countries/country-cards.component';
import { WishListComponent } from './wish-list/wish-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddCaseComponent } from './add-case/add-case.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MetadataComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    OverallDataComponent,
    CasesInCitiesComponent,
    ContactComponent,
    CountryCardsComponent,
    WishListComponent,
    LandingPageComponent,
    AddCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
