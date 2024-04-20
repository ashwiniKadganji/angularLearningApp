import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'AngularLearning';



  ngOnInit(): void {


    // craete custom observable 
       const myObservable = new Observable(observer =>{
        observer.next('data 1');
        observer.next('data 2');
        observer.complete();
       })

       // subscribe observable 
      myObservable.subscribe(res =>{
        console.log('using custom observable get data :',res);
        
      })


  }
}
