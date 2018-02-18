import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceCreateComponent } from './device-create.component';

const routes: Routes = [
    {
        path: '',
        component: DeviceCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceCreateRoutingModule {}
