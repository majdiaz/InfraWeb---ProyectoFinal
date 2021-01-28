import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarmedicoPageRoutingModule } from './agregarmedico-routing.module';

import { AgregarmedicoPage } from './agregarmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarmedicoPageRoutingModule
  ],
  declarations: [AgregarmedicoPage]
})
export class AgregarmedicoPageModule {}
