import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName : any;
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res =>{
      console.log('get data from comp4 : ',res);
      this.userName = res; 
    })
  }

  ngOnInit(): void {
  }

  updateUsername(uname: any) {
      this._utilityService.userName.next(uname.value);
    }
}
