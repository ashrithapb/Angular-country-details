import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  result:any = {};
  regions: String[] = [];
  seachCountry:any = '';
  darkmode:boolean = true;
  mode:string = 'lightmode';
  modetext:string = 'Dark mode';
  constructor(private http:HttpClient, private _homeServiceService: HomeServiceService){}

  ngOnInit(): void{
    let targetUrl = 'https://restcountries.eu/rest/v2/';
    let uniqueRegions = {};
    this.http.get(targetUrl).subscribe(response => {this.result = response;
      for(let obj of this.result){
        uniqueRegions[obj.region]= 0;
      }
      this.regions = Object.keys(uniqueRegions);
    });
  }
  regionChanged(selectedValue:string){
    this._homeServiceService.setContinent(selectedValue);
  }
  searchCountry(){
    this._homeServiceService.setSearchCountry(this.seachCountry);
  }
  changeMode(){
    this.darkmode = !this.darkmode;
    this.mode = this.darkmode? 'darkmode':'lightmode';
    this.modetext = this.darkmode? 'Light mode':'Dark mode';
    this._homeServiceService.setMode(this.mode);
  }
}
