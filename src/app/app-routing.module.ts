import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimularCompraComponent } from './pages/simular-compra/simular-compra.component';


const routes: Routes = [
  { path: 'simulacao-compra', component: SimularCompraComponent },
  {
    path: '**',
    redirectTo: '/simulacao-compra',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
