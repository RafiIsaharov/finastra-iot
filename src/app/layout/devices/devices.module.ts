import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { CollapseComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule, 
    PageHeaderModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DevicesComponent,CollapseComponent]
})
export class DevicesModule { }
