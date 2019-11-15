import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraDTO } from '../../entities/compraDTO';
import { SimularCompraService } from './simular-compra.service';

@Component({
  selector: 'app-simular-compra',
  templateUrl: './simular-compra.component.html',
  styleUrls: ['./simular-compra.component.scss']
})
export class SimularCompraComponent implements OnInit {

  public formulario: FormGroup;
  constructor(private fb: FormBuilder, private service: SimularCompraService) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      valor: [null],
      quantidadeParcela: [null],
      data: [null],
      juros: [null],
      descricao: [null]
    });
  }

  public salvar() {
    const compra = new CompraDTO(this.formulario.value);
    this.service.salvar(compra).subscribe((resp) => console.log(resp));

  }

}
