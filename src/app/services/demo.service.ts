import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  products = [
    { id : 1,name : 'Angular', education : 'Computer Science', address : 'Pune',state : 'Maharashtra'},
    { id : 2,name : 'react', education : ' Science', address : 'Pune',state : 'Maharashtra' },
    { id : 3,name : 'java', education : 'Computer Science', address : 'Pune',state : 'Maharashtra' },
    { id : 4,name : 'sql', education : 'Computer Science', address : 'Pune',state : 'Maharashtra'},
    {  id : 5,name : 'html', education : 'Computer Science', address : 'Pune',state : 'Maharashtra'}
  ]
  constructor() { }

  getProducts(){
       return this.products;
  }
}
