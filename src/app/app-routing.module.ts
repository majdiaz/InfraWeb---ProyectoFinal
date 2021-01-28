import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'prevencion',
    loadChildren: () => import('./prevencion/prevencion.module').then( m => m.PrevencionPageModule)

  },
  {
    path: 'agregarmedico',
    loadChildren: () => import('./agregarmedico/agregarmedico.module').then( m => m.AgregarmedicoPageModule)
  },
  {
    path: 'editarmedico',
    loadChildren: () => import('./editarmedico/editarmedico.module').then( m => m.EditarmedicoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
