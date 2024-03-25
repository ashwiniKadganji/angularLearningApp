import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

userName: any;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      console.log('get data from comp1 : ',res);
      this.userName = res;
    })
   }

  ngOnInit(): void {
  }


  updateUsername(uname : any) {
     this._utilityService.userName.next(uname.value);
    }
}
