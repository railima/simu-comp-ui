import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimularCompraComponent } from './pages/simular-compra/simular-compra.component';
import { MinhasSimulacoesComponent } from './pages/minhas-simulacoes/minhas-simulacoes.component';
import { MinhasSimulacoesResolver } from './pages/minhas-simulacoes/minhas-simulacoes-resolver.service';


const routes: Routes = [
  { path: 'simulacao-compra', component: SimularCompraComponent },
  { path: 'minhas-simulacoes', component: MinhasSimulacoesComponent, resolve: {
    simulacoes: MinhasSimulacoesResolver
  } },
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
