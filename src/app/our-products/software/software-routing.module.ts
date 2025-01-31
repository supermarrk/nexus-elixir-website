import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareComponent } from './software.component';

const routes: Routes = [{
  path: 'products/software-solutions',
  component: SoftwareComponent,
  children: [
    {
      path: 'products/software-solutions',
      component: SoftwareComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
