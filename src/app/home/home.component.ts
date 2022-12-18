import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedDataService,private router:Router,private actroute:ActivatedRoute) { }
   show:string='home'
   user:any;
  ngOnInit(): void {
    this.service.sharedData.subscribe(data=>{alert(data)
    this.show+=data}
    );
    debugger
    
  
     
      
  }
  navigate(){
      // this.router.navigate(['sample']);
      // this.user=this.actroute.snapshot.params['id'];
      // this.user=this.actroute.snapshot.params['name']
      // this.user={
      //   id:this.actroute.snapshot.paramMap.get('id'),
      //   name:this.actroute.snapshot.paramMap.get('name')
    
      // }
      // alert(`the id and params is ${this.user.name} ${this.user.id}`)
  }

}
