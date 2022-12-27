import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { signUpPost } from '../signup.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: any = '';
  constructor(private authservice: PostService,private router:Router) {}

  ngOnInit(): void {}
  onswich() {
    this.isLoginMode = !this.isLoginMode;
  }
  allFormData(email: any, password: any, NgForm: NgForm) {
    let AuthObs: Observable<signUpPost>;
    if (!NgForm.valid) {
      throw new Error('something went wrong');
    }
    this.isLoading = true;
    if (this.isLoginMode) {
      AuthObs = this.authservice.login(email, password);
    } else {
      console.log('form valid and post the data');
      AuthObs = this.authservice.signUp(email, password);
    }

    // if(!errorRes.error.error.message){
    // this.error='pls check network' ;
    // }

    // else if(errorRes.error.error.message=='EMAIL-EXIST'){
    //   this.error=errorRes.error.error.message;
    //   throw new Error('Email is already exist')
    // }else{
    //   throw new Error('field required')
    // }
    AuthObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/'])
      },
      (errorRes) => {
        this.error = errorRes;
        console.log(errorRes);
        this.isLoading = false;
      }
    );
  }

  getPasswordErrors(data: any) {
    if (data.errors?.['minlength']) {
      return 'the Length should be 6 ';
    }
    if (data.errors?.['required']) {
      return 'Enter password';
    }
    return 'Enter Password';
  }
}
