import { KeyValue } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, retry } from 'rxjs';
import { Modelel } from '../models/modelel';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent implements OnInit {
  formData!:FormGroup;
  postman:any='';
  error=null
  constructor(private http:HttpClient,private sevice:PostService) { }

  ngOnInit(): void {
    this.formData=new FormGroup({
      title:new FormControl('',Validators.required),
      about:new FormControl('')
    })
    this.IterateData();

  }
  onSubmit(data:any){
    console.log(data.value);
    let sendQueryparams=new HttpParams();
    sendQueryparams=sendQueryparams.append('vitthal','satyam')
    this.http.post<{[key:string]:Modelel[]}>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json',data.value
    ,{headers:new HttpHeaders({
      myNameIs:'vitthal'
    }),params:sendQueryparams}).subscribe((ele)=>console.log(ele))

  }
  IterateData() {
    this.http.get<{[key:string]:Modelel[]}>('https://angular-practice-5a190-default-rtdb.firebaseio.com/posts.json').pipe(map((item)=>{

    let posts=[];
    for(let data in item){
      posts.push({...item[data as keyof typeof item],data})
    }
    return posts
   })).subscribe((item)=>{console.log(item),this.postman=item})
  }
  onclearData() {
    this.sevice.deletePost();
    this.postman=[]
  }
  GetDataRestricted() {
    this.sevice.createGet().subscribe((item)=>{
      console.log('successfully get data',item)
    },(error)=>{console.log(error),this.error=error.message})
  }
}
 //   let posts:any=[]
    //   for(let name in item){
    //     posts.push({...item[name as keyof typeof item],name})
    //   }
    //   return posts;
    // })).subscribe(resonse=>{this.postman=resonse})
