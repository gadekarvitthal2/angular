import { emitDistinctChangesOnlyDefaultValue, isNgTemplate, ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, ContentChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, interval, map, Observable, observable, Subscription } from 'rxjs';
import { __param } from 'tslib';
import { NewserviceService } from '../services/newservice.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],


})
export class SampleComponent implements OnInit, OnDestroy {
  unSubscribeData: Subscription | undefined;
  userName: any;
  user: any = { id: 1, name: '' }
  value: any = 12;
  isAvailable: boolean = true;
  inputData: string = ''
  @ViewChild('inputdata') inputdata!: ElementRef;
  @ContentChild('multiple_data') multiple_data: ElementRef | undefined;
  constructor(private service: SharedDataService, private newservice: NewserviceService, private actroute: ActivatedRoute) { }


  ngOnInit(): void {
    //  this.unSubscribeData= interval(1000).subscribe((data:any)=>{console.log(data)});

    let newonserbavle = Observable.create((data: any) => {
      let counter = 0;
      setInterval(() => {
        counter++
        data.next(counter);
        if (counter > 4) {
          data.error('conunter is greter than 3')
        };
        if (counter > 3) {
          data.complete();
        }
      }, 1000)
    })

    newonserbavle.pipe(filter((data:any):any=>{if(data>2)
      return true;
    }),map((data:any)=>'conter is '+(data))).subscribe((data: any) => {
      console.log(data), (error: any) => console.log(error), () => console.log('data')
    })
  }
  ngOnDestroy(): void {
    // this.unSubscribeData?.unsubscribe();

    // let newonserbavle=Observable.create((data:any)=>{
    //   data.next(10)
    // }).subscribe((data:any)=>{console.log(data)})}
  }
  onclick() {
    // this.service.onclick();
    // console.log(this.actroute.snapshot.paramMap.get('id'))

    // console.log(this.actroute.snapshot.paramMap.get('name'));
    this.unSubscribeData?.unsubscribe();
  }


  onPush() {
    //  console.log('this is shared service',this.service.name);
  }


}
