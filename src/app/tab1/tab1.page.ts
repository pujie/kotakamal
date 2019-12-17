import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { LocationService } from '../location.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  location = {
    name:'',
    cp:'',
    address:'',
    district:'',
    phone:'',
    latitude:0,
    longitude:0,
    createuser:'fulan'
  }
  disableEntryButton = false
  constructor(
    private geolocation: Geolocation,
    private locationService:LocationService,
    private toastController: ToastController
  ) 
  {
    this.reload()
  }
  clear(){
    this.location.name = ''
    this.location.cp = ''
    this.location.address = ''
    this.location.phone = ''
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
    this.disableEntryButton = true
    this.showConfirm()
  }
    async showConfirm(){
    const toast = await this.toastController.create({
      header:'Konfirmsi',
      message:'Entri Lokasi sudah tersimpan',
      position:'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    toast.onDidDismiss().then(
      res => {
        console.log("Entri saved")
        this.disableEntryButton = false
        this.clear()
      }
    )
    toast.present();
  }

}
