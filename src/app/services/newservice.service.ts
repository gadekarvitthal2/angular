import { Injectable, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService implements OnInit{

  sample:string='new service data =>'

  constructor(private service1:SharedDataService) { }
  ngOnInit(): void {
    debugger
  }

oncall(){
  console.log(this.sample+' '+this.service1.name);

}
}
