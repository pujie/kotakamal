import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  obj: Observable<any>
  constructor(
    private http: HttpClient,
  ) {
  }
  getData(callback){
    this.obj = this.http.get('http://kotakamalserver/main/gets')
    this.obj.subscribe(
      data=>{
        console.log("Success main server",data)
        callback(data)
      },
      err=>{
        console.log("Error main server",err)
        callback(err)
      }
    )
  }
  saveData(loc,callback){
    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/x-www-form-urlencoded'
      })
     };
    console.log("Data to save",loc)
    let params = 'name='+loc.name+'&address='+loc.address+'&district='+loc.district+'&latitude='+loc.latitude+'&longitude='+loc.longitude+''
    this.obj = this.http.post('http://kotakamalserver/main/save',params,ParseHeaders)
    this.obj.subscribe(
      data=>{
        console.log("Success save loc",data)
        callback(data)
      },
      err=>{
        console.log("Error save loc",err)
        callback(err)
      }
    )
  }
}
