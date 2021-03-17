import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetDetailsPage } from './projet-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetDetailsPageRoutingModule {}
