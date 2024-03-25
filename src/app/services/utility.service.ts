import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // send the data one compoennt to another compoenent using subject and behaviour subject means special kind of observable with service

  // userName =  new Subject<any>;

  // behaviour subject used for set the initial value
  userName =  new BehaviorSubject('Ashu');

  constructor() { }

}
