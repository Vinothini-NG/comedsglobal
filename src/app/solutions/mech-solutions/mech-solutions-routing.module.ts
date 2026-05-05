import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechSolutionsComponent } from './mech-solutions.component';

const routes: Routes = [{ path: '', component: MechSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechSolutionsRoutingModule { }
