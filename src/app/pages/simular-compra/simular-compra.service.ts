import { HttpClient, HttpParams } from '@angular/common/http';
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

  public simular(compra: CompraDTO): Observable<CompraDTO> {
    return this.http.get<CompraDTO>(this.url + '/simular', {
      params: new HttpParams()
      .append('valor', compra.valor.toString())
      .append('juros', compra.juros.toString())
      .append('quantidadeParcela', compra.quantidadeParcela.toString())
      .append('data', compra.data.toISOString())
    })
  }
}
