import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  animations : [routerTransition()]
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //devices: any;
  
    //constructor(private http: HttpClient) { }
  
    //ngOnInit() {
      //this.http.get('/device').subscribe(data=>{
      //  this.devices=data;
      //});}

}
