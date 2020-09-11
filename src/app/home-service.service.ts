import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private content = new BehaviorSubject('Asia');
  private searchCountry = new BehaviorSubject('');
  private selectedCountryObject = new BehaviorSubject({});
  private mode = new BehaviorSubject('lightmode');
  public share = this.content.asObservable();
  public searchShare = this.searchCountry.asObservable();
  public selectedCountryObjectShare = this.selectedCountryObject.asObservable();
  public modeShare = this.mode.asObservable();
  
  constructor() { }

  setContinent(data:string){
    this.content.next(data);
  }
  setSearchCountry(country:string){
    this.searchCountry.next(country);
  }
  setSelectedCountryObject(selectedCountryObject:Object){
    this.selectedCountryObject.next(selectedCountryObject);
  }
  setMode(selectedmode:string){
    this.mode.next(selectedmode);
  }
}
