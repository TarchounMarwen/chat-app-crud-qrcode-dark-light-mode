import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeDetailsPage } from './qrcode-details.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeDetailsPageRoutingModule {}
