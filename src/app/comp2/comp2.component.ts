import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName : any;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      console.log('get data from comp2 : ',res);
      this.userName = res;
    })
   }

  ngOnInit(): void {
  }


  updateUsername(uname: any) {
 
       this._utilityService.userName.next(uname.value);
    }
}
