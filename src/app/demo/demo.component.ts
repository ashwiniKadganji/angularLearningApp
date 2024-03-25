import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 product: any[] | undefined;

//inject the service by using consructor level
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this.product = this._demoService.getProducts();
      console.log(this.product);
       
    
  }

}
