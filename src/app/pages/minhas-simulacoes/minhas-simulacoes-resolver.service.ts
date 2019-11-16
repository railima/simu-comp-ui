import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CompraDTO } from '../../entities/compraDTO';
import { MinhasSimulacoesService } from './minhas-simulacoes.service';

@Injectable({
  providedIn: 'root'
})
export class MinhasSimulacoesResolver implements Resolve<Observable<CompraDTO[]>> {
  constructor(private service: MinhasSimulacoesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CompraDTO[]> {
    return this.service.getAll();
  }
}
