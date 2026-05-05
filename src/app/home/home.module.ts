import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OurValuesModule } from '../about_us/our-values/our-values.module';
import { ItSolutionsModule } from '../solutions/it-solutions/it-solutions.module';
import { MechSolutionsModule } from '../solutions/mech-solutions/mech-solutions.module';
import { ItStaffingModule } from '../staffing/it-staffing/it-staffing.module';
import { MechStaffingModule } from '../staffing/mech-staffing/mech-staffing.module';
import { OurImpactsModule } from '../about_us/our-impacts/our-impacts.module';
import { ContactUsModule } from '../about_us/contact-us/contact-us.module';
import { IntersectionObserversDirective } from './intersection-observers.directive';
@NgModule({
  declarations: [
    HomeComponent,
    IntersectionObserversDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OurValuesModule,
    ItSolutionsModule,
    MechSolutionsModule,
    ItStaffingModule,
    MechStaffingModule,
    OurImpactsModule,
    ContactUsModule,
  ]
})
export class HomeModule {
}
