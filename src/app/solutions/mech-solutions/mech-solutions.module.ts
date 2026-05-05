import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechSolutionsRoutingModule } from './mech-solutions-routing.module';
import { MechSolutionsComponent } from './mech-solutions.component';


@NgModule({
  declarations: [MechSolutionsComponent],
  imports: [
    CommonModule,
    MechSolutionsRoutingModule
  ],
  exports: [
    MechSolutionsComponent
  ]
})
export class MechSolutionsModule { }
