import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'projets',
        loadChildren: () => import('../projets/projets.module').then( m => m.ProjetsPageModule)
      },
      {
        path: 'room',
        ...canActivate(redirectUnauthorizedToLogin),
        loadChildren: () => import('../room/room.module').then( m => m.RoomPageModule)
      },
      {
        path: 'qrcode-details',
        loadChildren: () => import('../qrcode-details/qrcode-details.module').then( m => m.QrcodeDetailsPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/(projets:projets)',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(projets:projets)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
