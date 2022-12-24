import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Modelel } from './models/modelel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createFetch(item:Modelel[]) {
    return this.http.post<Modelel[]>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json',item)
  }

  createGet(){
    return this.http.get<{[key:string]:Modelel[]}>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(respone=>{
      let users=[]
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
}
