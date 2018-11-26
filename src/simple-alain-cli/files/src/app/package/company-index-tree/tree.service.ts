import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  setValue(v:any){
    v.title='tttttt';
  }

  getValue():string {
    return 'sdfsdfsdfsdfsdf';
  } 
}
