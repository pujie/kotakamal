import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  locations
  filterparam
  constructor(
    private locationService: LocationService
  ) {
    this.reload()
  }
  showMap(loc){
//    window.location.href = "https://www.google.com/maps/@"+loc.latitude+","+loc.longitude+"z"
    window.location.href = "https://www.google.com/maps?q="+loc.latitude+","+loc.longitude+""
  }
  reload(){
    this.locationService.getData(result=>{
      console.log(result)
      this.locations = result
    })
  }
  filter(event){
    //console.log("Event",event)
    this.locations.filter(item=>{
      if(item.name.toLowerCase().indexOf(event) > -1){
        console.log("Item",item,'filterparam',this.filterparam)
        return item
      }
    })
  }
}
