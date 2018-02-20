import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DevicesService } from '../../shared/services/devices.service';
import { Observable } from 'rxjs/Observable';

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
  /*
  onRemove(device){
    let index = this.devices.indexOf(device);
    this.devices.splice(index,1);
  }
  */


  onRemoveDevice(device) {
    if (confirm("Are you sure you want to delete " + device.name + "?")) {
      this._deviceService.deleteDevice(device).subscribe(
        data => {
          // refresh the list
          this._deviceService.getDevices();
          return true;
        },
        error => {
          console.error("Error deleting device!");
          return Observable.throw(error);
        }
      );
    }
  }

  onSaveDevice(device) {
    this._deviceService.updateDevice(device).subscribe(
      data => {
        // refresh the list
        this._deviceService.getDevices();
        return true;
      },
      error => {
        console.error("Error saving device!");
        return Observable.throw(error);
      }
    );
  }

  onCreateDevice(name) {
    let device = {name: name};
    this._deviceService.createDevice(device).subscribe(
      data => {
        // refresh the list
        this._deviceService.getDevices();
        return true;
      },
      error => {
        console.error("Error saving device!");
        return Observable.throw(error);
      }
    );
  }

}
