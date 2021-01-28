import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmedicoPage } from './editarmedico.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmedicoPageRoutingModule {}
