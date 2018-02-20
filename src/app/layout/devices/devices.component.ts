import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DevicesService } from '../../shared/services/devices.service';

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  animations : [routerTransition()]
})
export class DevicesComponent implements OnInit {

  devices:any;

  constructor(private _deviceService: DevicesService) { }

  ngOnInit() {
    this._deviceService.getDevices().subscribe(
      data => { this.devices = data},
      err => console.error(err),
      () => console.log('done loading devices')
       );
  }  
onRemove(device){
  let index = this.devices.indexOf(device);
  this.devices.splice(index,1);
}
}
