import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompraDTO } from 'src/app/entities/compraDTO';

@Injectable({
  providedIn: 'root'
})
export class MinhasSimulacoesService {
  private url = 'http://localhost:5000/compra';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<CompraDTO[]> {
    return this.http.get<CompraDTO[]>(this.url);
  }
}
