import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareComponent } from './hardware.component';

const routes: Routes = [{
  path: 'products/it-services',
  component: HardwareComponent,
  children: [
    {
      path: 'products/it-services',
      component: HardwareComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwareRoutingModule { }
