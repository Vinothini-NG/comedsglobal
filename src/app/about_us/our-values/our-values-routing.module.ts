import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurValuesComponent } from './our-values.component';

const routes: Routes = [{ path: '', component: OurValuesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurValuesRoutingModule { }
