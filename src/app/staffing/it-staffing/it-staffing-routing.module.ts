import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItStaffingComponent } from './it-staffing.component';

const routes: Routes = [{ path: '', component: ItStaffingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItStaffingRoutingModule { }
