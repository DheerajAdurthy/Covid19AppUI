import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetadataComponent } from './metadata/metadata.component';
import { RegisterComponent } from './Register/register.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'covid-19',component:MetadataComponent},
  {path:'register',component:BodyComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
