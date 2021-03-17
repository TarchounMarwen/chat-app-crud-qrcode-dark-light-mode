import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodeDetailsPageRoutingModule } from './qrcode-details-routing.module';

import { QrcodeDetailsPage } from './qrcode-details.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeDetailsPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [QrcodeDetailsPage]
})
export class QrcodeDetailsPageModule {}
