import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  isSubmitted:boolean=false;
  constructor() {}
  formRecord: any = {
    email: '',
    password: '',
    gender: '',
  };
  contact: string = 'male';
  userName: string = 'vitthal';
  @ViewChild('form') formInfo!: NgForm;
  ngOnInit(): void {}


  formDetails(element: NgForm) {
    this.isSubmitted=true;
    this.formRecord.email=element.form.value.email;
    this.formRecord.password=element.form.value.password;
    this.formRecord.gender=element.form.value.gender;
    element.form.reset();
    // console.log(element.form.value.email);

  }

  setValue() {
    this.formInfo.form.patchValue({
      userdata: {
        email: 'vitthal@gmail.com',
        password: '123456',
      },gender:'male'
    });
  }
}
