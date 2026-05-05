import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItStaffingRoutingModule } from './it-staffing-routing.module';
import { ItStaffingComponent } from './it-staffing.component';


@NgModule({
  declarations: [ItStaffingComponent],
  imports: [
    CommonModule,
    ItStaffingRoutingModule
  ],
  exports: [
    ItStaffingComponent
  ]
})
export class ItStaffingModule { }
