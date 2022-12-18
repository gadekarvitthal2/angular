import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private acroute:ActivatedRoute) { }

  sharedData=new EventEmitter<string>();

  name:string='vitthal';

  onclick(){
    console.log(this.acroute.snapshot.paramMap.get('id'))
    
    console.log(this.acroute.snapshot.paramMap.get('name'));

    console.log(this.acroute.snapshot.queryParamMap);

    console.log(this.acroute.snapshot.fragment)
  }

  Subscription=new Subject<boolean>();
  onDataChange(){
    if(this.Subscription){
      this.Subscription.next(false);
    }

  }
      
  }

