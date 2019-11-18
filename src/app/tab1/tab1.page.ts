import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { LocationService } from '../location.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  location = {
    name:'',
    address:'',
    district:'',
    latitude:0,
    longitude:0
  }
  constructor(
    private geolocation: Geolocation,
    private locationService:LocationService
  ) 
  {
    this.reload()
  }
  reload(){
    this.geolocation.getCurrentPosition().then(location=>{
      console.log(location.coords.longitude)
      this.location.latitude = location.coords.latitude
      this.location.longitude = location.coords.longitude
    }).catch(err=>{
      console.log("Error",err)
    })
  }
  getData(location){
    this.locationService.getData(res=>{
      console.log("Result of getData",res)
    })
  }
  saveEntry(location){
    this.locationService.saveData(location,res=>{
      console.log("Result of saveData",res)
    })
  }
}
