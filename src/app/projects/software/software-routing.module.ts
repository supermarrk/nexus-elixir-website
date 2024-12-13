import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareComponent } from './software.component';

const routes: Routes = [{
  path: 'projects/software',
  component: SoftwareComponent,
  children: [
    {
      path: 'projects/software',
      component: SoftwareComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
