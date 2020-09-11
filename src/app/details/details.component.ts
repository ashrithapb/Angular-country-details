import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countryObject:any = [];
  constructor(private _service:HomeServiceService) { }

  ngOnInit(): void {
    this._service.selectedCountryObjectShare.subscribe(x => {
      this.countryObject.push(x);
    });

  }

}
