import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'it_solutions', loadChildren: () => import('./solutions/it-solutions/it-solutions.module').then(m => m.ItSolutionsModule) },
  { path: 'mech_solutions', loadChildren: () => import('./solutions/mech-solutions/mech-solutions.module').then(m => m.MechSolutionsModule) },
  { path: 'it_stafing', loadChildren: () => import('./staffing/it-staffing/it-staffing.module').then(m => m.ItStaffingModule) },
  { path: 'mech_staffing', loadChildren: () => import('./staffing/mech-staffing/mech-staffing.module').then(m => m.MechStaffingModule) },
  { path: 'contact_us', loadChildren: () => import('./about_us/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'our_values', loadChildren: () => import('./about_us/our-values/our-values.module').then(m => m.OurValuesModule) },
  { path: 'our_impacts', loadChildren: () => import('./about_us/our-impacts/our-impacts.module').then(m => m.OurImpactsModule) },
  { path: 'news', loadChildren: () => import('./about_us/news/news.module').then(m => m.NewsModule) },
  { path: 'help', loadChildren: () => import('./support/help/help.module').then(m => m.HelpModule) },
  { path: 'communities', loadChildren: () => import('./support/communities/communities.module').then(m => m.CommunitiesModule) },
  { path: 'blogs', loadChildren: () => import('./support/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'events', loadChildren: () => import('./support/events/events.module').then(m => m.EventsModule) },
  { path: 'customers', loadChildren: () => import('./support/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'careers', loadChildren: () => import('./careers/careers/careers.module').then(m => m.CareersModule) },

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
