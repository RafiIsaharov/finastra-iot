import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const sUrl = 'http://localhost:3000/devices';

@Injectable()
export class DevicesService {

  constructor(private http:HttpClient) { }

  getDevices(){
    return this.http.get(sUrl);
  }


  createDevice(device) {
        let body = JSON.stringify(device);
        return this.http.post(sUrl, body, httpOptions);
    }

  updateDevice(device) {
      let body = JSON.stringify(device);
      return this.http.put(sUrl +  device.id, body, httpOptions);
  }

  deleteDevice(device) {
      return this.http.delete(sUrl + device.id);
  }
}
