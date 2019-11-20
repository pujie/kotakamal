import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server
  constructor() { }
  getServer(){
    return 'http://kotakamal.suarahati.org/index.php/main/'
  }
}
