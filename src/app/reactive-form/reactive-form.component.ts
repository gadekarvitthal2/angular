import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  genders:any=['male','female'];
 formGroups!:FormGroup
 restrictedNames=['vitthal']
  ngOnInit(): void {



    this.formGroups=new FormGroup({
      userdata:new FormGroup({email: new FormControl('',[Validators.required,this.isRestrictedName.bind(this)]),
      password:new FormControl('',Validators.required)}),
      gender:new FormControl(''),
      hobbies:new FormArray([])

    })
  }
  get controlValues(){
    return (this.formGroups.get('hobbies') as FormArray).controls
  }
  onAddControls() {
    const control=new FormControl('',Validators.required)
    return (<FormArray>this.formGroups.get('hobbies')).push(control)
  }

  formsdata(data:any) {
    console.log(data)
    this.formGroups.statusChanges.subscribe((item)=>console.log(item));
    this.formGroups.valueChanges.subscribe((item)=>console.log(item))
    this.formGroups.patchValue({
     userdata:{
      email:'vitthal@gmail.com',
      password:'123456'
     },gender:'male'
    })
  }

  isRestrictedName (control :FormControl){
    if(this.restrictedNames.includes(control.value)){
      return {nameIsRestricted:true};
    }
    return null;
  }

}
