import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItSolutionsComponent } from './it-solutions.component';

const routes: Routes = [{ path: '', component: ItSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItSolutionsRoutingModule { }
