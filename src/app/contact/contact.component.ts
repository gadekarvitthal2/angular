import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sample } from 'rxjs';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route:Router,private service:SharedDataService) { }

  ngOnInit(): void {
  }
  goToSample(){
    //this.route.navigate(['sample','id','name'],{queryParams:{ id:'1',name:'vitthal'},fragment:'phone'})
  //this.route.navigate(['sample','id','name'],{queryParams:{id:'1',name:'sample'},fragment:'phychology'})
  this.route.navigate(['sample','id','name'],{queryParams:{id:'225',name:'hindustani bhau'},fragment:'fragmentSample'})
  }
  showThedata(){
this.service.onDataChange();
  }

}
