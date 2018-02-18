import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  animations : [routerTransition()]
})
export class DevicesComponent implements OnInit {

  devices  = [
    { id: 1,  name: 'device name 1'},
    { id: 2,  name: 'device name 2'},
    { id: 3,  name: 'device name 3'},
    { id: 4,  name: 'device name 4'}
  ];

  constructor() { }

  ngOnInit() {
  }
  //devices: any;
  
    //constructor(private http: HttpClient) { }
  
    //ngOnInit() {
      //this.http.get('/device').subscribe(data=>{
      //  this.devices=data;
      //});}
onRemove(device){
  let index = this.devices.indexOf(device);
  this.devices.splice(index,1);
}
}
