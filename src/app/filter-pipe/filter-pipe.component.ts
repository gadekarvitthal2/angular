import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.scss'],
})
export class FilterPipeComponent implements OnInit {
  filterString: string = '';
  userArray = [
    {
      name: 'vitthal',
      date: new Date(12, 2, 1996),
    },
    {
      name: 'shyam',
      date: new Date(12, 2, 1968),
    },
    {
      name: 'kartik',
      date: new Date(12, 2, 1998),
    },
  ];

  asyncPipeData=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('this promise has been resolve')
    }, 3000);
  })
  constructor() {}

  ngOnInit(): void {}

  onAddData() {
    this.userArray.push({
      name: 'karan',
      date: new Date(12 - 5 - 1999),
    });
  }
}
