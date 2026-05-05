import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechStaffingRoutingModule } from './mech-staffing-routing.module';
import { MechStaffingComponent } from './mech-staffing.component';


@NgModule({
  declarations: [MechStaffingComponent],
  imports: [
    CommonModule,
    MechStaffingRoutingModule
  ],
  exports: [
    MechStaffingComponent
  ]
})
export class MechStaffingModule { }
