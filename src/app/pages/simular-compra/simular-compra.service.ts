import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompraDTO } from 'src/app/entities/compraDTO';

@Injectable({
  providedIn: 'root'
})
export class SimularCompraService {
  private url = 'http://localhost:5000/compra';

  constructor(private http: HttpClient) {}

  public salvar(compra: CompraDTO): Observable<boolean> {
    return this.http.post<boolean>(this.url, compra);
  }
}
