import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinhasSimulacoesModule } from './pages/minhas-simulacoes/minhas-simulacoes.module';
import { SimularCompraModule } from './pages/simular-compra/simular-compra.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),

    SimularCompraModule,
    MinhasSimulacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
