import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {custome} from './sample/customeDir'
import { CommonModule } from '@angular/common'; 
import { SharedDataService } from './services/shared-data.service';
import { NewserviceService } from './services/newservice.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,custome, HomeComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,HttpClientModule,Ng2SearchPipeModule,Ng2OrderModule,NgxPaginationModule,CommonModule,RouterModule.forRoot([])
  ],
  providers: [SharedDataService,NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }