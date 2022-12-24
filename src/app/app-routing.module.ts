import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { PostdataComponent } from './postdata/postdata.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SampleComponent } from './sample/sample.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path:"sample/:id/:name",component:SampleComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactiveform',component:ReactiveFormComponent},
  {path:'filterpipe',component:FilterPipeComponent},
  {path:'postdata',component:PostdataComponent},
  {path:'contact/:id/:name',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
