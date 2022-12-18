import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
isShow:boolean=false;

  title = 'material1';
  constructor(private acroute:ActivatedRoute,private service:SharedDataService){

  }
ngOnInit(): void {
  this.service.Subscription.subscribe(data=>{
    this.isShow=data
  })
}  
oncompile(){
  this.service.onclick();

}

 
  
}
