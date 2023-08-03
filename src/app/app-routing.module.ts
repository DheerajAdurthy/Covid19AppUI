import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MetadataComponent } from './metadata/metadata.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'covid-19',component:MetadataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
