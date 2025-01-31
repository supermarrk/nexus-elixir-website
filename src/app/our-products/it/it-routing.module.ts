import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItComponent } from './it.component';

const routes: Routes = [{
  path: 'products/it-services',
  component: ItComponent,
  children: [
    {
      path: 'products/it-services',
      component: ItComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItRoutingModule { }
