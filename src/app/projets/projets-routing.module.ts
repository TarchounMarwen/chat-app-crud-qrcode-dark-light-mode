import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetsPage } from './projets.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetsPage
  },
  {
    path: 'projet-details/:id',
    loadChildren: () => import('./projet-details/projet-details.module').then( m => m.ProjetDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsPageRoutingModule {}
