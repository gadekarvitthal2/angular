import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { PostdataComponent } from './postdata/postdata.component';
import { HttpServiceInterceptor } from './http-service.interceptor';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthTokenInterceptorInterceptor } from './auth-token-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,custome, HomeComponent, ContactComponent, TemplateDrivenComponent, ReactiveFormComponent, FilterPipeComponent, FilterpipePipe, PostdataComponent, AuthComponent, LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,
    NgbModule,FormsModule,HttpClientModule,Ng2SearchPipeModule,Ng2OrderModule,NgxPaginationModule,CommonModule,RouterModule.forRoot([])
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpServiceInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:HttpServiceInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterceptorInterceptor,multi:true},SharedDataService,NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
