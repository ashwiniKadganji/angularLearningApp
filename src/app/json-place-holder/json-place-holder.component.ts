import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-json-place-holder',
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.css']
})
export class JsonPlaceHolderComponent implements OnInit {
  datas!: any[];
  pictures!: any[];

  constructor(private _jsonPlaceHolderService: JsonplaceholderService) { }

  ngOnInit(): void {
    
     this._jsonPlaceHolderService.getData().subscribe(res =>{
      console.log(res);
        this.datas = res;
    })

    this._jsonPlaceHolderService.getPhotos().subscribe(photos =>{
      console.log(photos);
      this.pictures = photos;
    })

  }

}
