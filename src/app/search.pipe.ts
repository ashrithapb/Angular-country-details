import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchInput:any): any {
    if(searchInput == ""){
      return value;
    }
    const countryList:any[]=[];
    for(let i=0;i<=value.length-1;i++){
      let country:string = value[i].name;
      if(country.toLowerCase().startsWith(searchInput.trim().toLowerCase())){
        countryList.push(value[i]);
      }
    }
    return countryList;
  }

}
