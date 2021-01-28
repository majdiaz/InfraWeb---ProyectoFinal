import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmedicoPageRoutingModule } from './editarmedico-routing.module';

import { EditarmedicoPage } from './editarmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditarmedicoPageRoutingModule
  ],
  declarations: [EditarmedicoPage]
})
export class EditarmedicoPageModule {}
