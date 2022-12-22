import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  genders:any=['male','female'];

  ngOnInit(): void {
  }
  forms=new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
    gender:new FormControl('')

  })
  formsdata(data:any){
    console.log(data)
  }

}
