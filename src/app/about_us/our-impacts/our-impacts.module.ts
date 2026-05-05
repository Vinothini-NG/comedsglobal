import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurImpactsRoutingModule } from './our-impacts-routing.module';
import { OurImpactsComponent } from './our-impacts.component';


@NgModule({
  declarations: [OurImpactsComponent],
  imports: [
    CommonModule,
    OurImpactsRoutingModule
  ],
  exports: [
    OurImpactsComponent
  ]
})
export class OurImpactsModule { }
