import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:"sample/:id/:name",component:SampleComponent},

  {path:'contact/:id/:name',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
