import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItSolutionsRoutingModule } from './it-solutions-routing.module';
import { ItSolutionsComponent } from './it-solutions.component';


@NgModule({
  declarations: [
    ItSolutionsComponent
  ],
  imports: [
    CommonModule,
    ItSolutionsRoutingModule
  ],
  exports: [
    ItSolutionsComponent
  ]
})
export class ItSolutionsModule { }
