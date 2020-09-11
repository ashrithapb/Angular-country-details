import { HttpClient } from '@angular/common/http';
import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  continent:any = [];
  seachCountry:any = '';
  constructor(public router:Router, private _http:HttpClient, private _homeService:HomeServiceService) { }

  ngOnInit(): void {
    this._homeService.share.subscribe(x =>{
      this._http.get('https://restcountries.eu/rest/v2/region/'+x).subscribe(response =>{
        this.continent = response;
      });
    });
    this._homeService.searchShare.subscribe(x=> this.seachCountry = x);
  }
  goTo(selectedObject:any, page:string){
    this._homeService.setSelectedCountryObject(selectedObject);
    this.router.navigate([page]);
  }

}
