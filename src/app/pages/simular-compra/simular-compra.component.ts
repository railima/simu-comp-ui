import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompraDTO } from '../../entities/compraDTO';
import { SimularCompraService } from './simular-compra.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simular-compra',
  templateUrl: './simular-compra.component.html',
  styleUrls: ['./simular-compra.component.scss']
})
export class SimularCompraComponent implements OnInit {
  public formulario: FormGroup;
  public compraSimulada: CompraDTO;
  constructor(
    private fb: FormBuilder,
    private service: SimularCompraService,
    private msg: ToastrService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      valor: [null, Validators.required],
      quantidadeParcela: [null, Validators.required],
      data: [null, Validators.required],
      juros: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  public salvar() {
    const formularioValido = this.validarFormulario();
    if (formularioValido) {
      const compra = new CompraDTO(this.formulario.value);
      this.service.salvar(compra).subscribe(resp => {
        if (resp) {
          this.msg.success('Simulação salva', 'Sucesso!');
          this.formulario.reset();
          this.compraSimulada = null;
        } else {
          this.msg.error('Algo não saiu como esperado. Por favor, tente novamente.', 'Erro!');
        }
      });
    } else {
      this.msg.warning('Por favor, preencha todo o formulário', 'Atenção!');
    }
  }

  public simular() {
    const formularioValido = this.validarFormulario();
    if (formularioValido) {
      const compra = new CompraDTO(this.formulario.value);
      this.service.simular(compra).subscribe((resp: CompraDTO) => {
        this.compraSimulada = resp;
      });
    } else {
      this.msg.warning('Por favor, preencha todo o formulário', 'Atenção!');
    }
  }

  private validarFormulario(): boolean {
    Object.keys(this.formulario.controls).forEach(field => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    return this.formulario.valid;
  }
}
