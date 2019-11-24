import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  locations
  constructor(
    private locationService: LocationService
  ) {
    this.locationService.getData(result=>{
      console.log(result)
      this.locations = result
    })
  }
  showMap(loc){
//    window.location.href = "https://www.google.com/maps/@"+loc.latitude+","+loc.longitude+"z"
    window.location.href = "https://www.google.com/maps?q="+loc.latitude+","+loc.longitude+""
  }
}
