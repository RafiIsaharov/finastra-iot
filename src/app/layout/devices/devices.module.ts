import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule, 
    PageHeaderModule
  ],
  declarations: [DevicesComponent]
})
export class DevicesModule { }
