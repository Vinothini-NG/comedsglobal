import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechStaffingComponent } from './mech-staffing.component';

const routes: Routes = [{ path: '', component: MechStaffingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechStaffingRoutingModule { }
