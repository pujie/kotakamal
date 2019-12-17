import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { FilterPipe } from '../filter.pipe'
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
    console.log("Param",event)
    this.locations.filter(item=>{

      console.log("cat",item.name,"::::searchData",event)
      console.log("indexof",item.name.search(event))
      return item.name.search(event)>=0
     //return item.name=="Berlian Optikal"
//      if(item.name.toLowerCase().indexOf(event) > -1){
//        console.log("Item",item,'filterparam',this.filterparam)
//        return item
//      }
    })
  }
}
