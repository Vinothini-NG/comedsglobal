import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurImpactsComponent } from './our-impacts.component';

const routes: Routes = [{ path: '', component: OurImpactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurImpactsRoutingModule { }
