import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, args: string): any {
    if(value.length==0 || args=='' ){
      return value
    }
    let users: any[]=[]
    for(let filter of value){
      if(filter['name']==args){
        users.push(filter)
      }
    }
    return users
  }

}
