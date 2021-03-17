import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetDetailsPageRoutingModule } from './projet-details-routing.module';

import { ProjetDetailsPage } from './projet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetDetailsPageRoutingModule
  ],
  declarations: [ProjetDetailsPage]
})
export class ProjetDetailsPageModule {}
