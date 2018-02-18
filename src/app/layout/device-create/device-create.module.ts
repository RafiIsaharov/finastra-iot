import { DevicesRoutingModule } from './../devices/devices-routing.module';
import { DeviceCreateComponent } from './device-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared/index';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    PageHeaderModule
  ],
  declarations: [DeviceCreateComponent]
})
export class DeviceCreateModule { }
