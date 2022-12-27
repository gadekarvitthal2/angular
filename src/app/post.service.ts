import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, ObservableInput, Subject, tap, throwError } from 'rxjs';
import { User } from 'user';
import { UserData } from './home/auth.interface';
import { Modelel } from './models/modelel';
import { signUpPost } from './signup.enum';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  IsLogin:boolean=false
  userSub=new BehaviorSubject<any | null>(null);
  constructor(private http:HttpClient) { }
  login(email:string,password:string) {
    this.IsLogin=true
    return this.http.post<signUpPost>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7AgCbHqZa3CauCM1224jA8JHS3b35Gr0`,{email,password,returnSecureToken:true}).pipe(
      catchError((res)=>{
        let errorMessage='An error Occured'
        if(!res.error || !res.error.error.message){
          throwError(errorMessage)
        }
        if(res.error.error.message=='EMAIL_EXISTS'){
          errorMessage='email already exist';
        }else if(res.error.error.message=='INVALID_PASSWORD'){
          errorMessage='Invalid Password'
        }else if(res.error.error.message=='EMAIL_NOT_FOUND'){
          errorMessage='Email not found'
        }
        return throwError(errorMessage)
      }),tap(this.handleUser.bind(this))
    )
  }
  logOut() {
    this.IsLogin=false;
  }
  private handleUser(response:signUpPost){
    const expireDate=new Date(new Date().getTime()+ +response.expiresln * 1000)
    const user=new UserData(response.email,response.localid,response.idToken,expireDate)
    this.userSub.next(user);
  }


  createFetch(item:Modelel[]) {
    this.userSub.subscribe(res=>{
      console.log(res)
    })
    return this.http.post<Modelel[]>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json',item)
  }

  createGet(){
    return this.http.get<{[key:string]:Modelel[]}>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(respone=>{
      let users: any[]=[]
      for(let data in respone){
        users.push({...respone[data as keyof typeof respone],data})
      }
      return users;
    }))
  }
  deletePost() {
     return this.http.delete('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json',{observe:'events'}).pipe(tap(item=>{
      if(item.type==0){
        console.log('status changed')
      }
      if(item.type==4){
        console.log(item)
      }
     })).subscribe(ele=>console.log(ele))
  }
  signUp(email:any,password:any) {
    return this.http.post<signUpPost>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7AgCbHqZa3CauCM1224jA8JHS3b35Gr0',{email,password,returnSecureToken:true}).pipe(
      catchError((res)=>{
        let errorMessage='An error Occured'
        if(!res.error || !res.error.error.message){
          throwError(errorMessage)
        }
        if(res.error.error.message=='EMAIL_EXISTS'){
          errorMessage='email already exist';
        }
        return throwError(errorMessage)
      }),tap(this.handleUser.bind(this))
    )
  }



}


