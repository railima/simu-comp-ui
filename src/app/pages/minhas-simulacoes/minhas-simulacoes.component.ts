import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompraDTO } from '../../entities/compraDTO';
import { MinhasSimulacoesService } from './minhas-simulacoes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minhas-simulacoes',
  templateUrl: './minhas-simulacoes.component.html',
  styleUrls: ['./minhas-simulacoes.component.scss']
})
export class MinhasSimulacoesComponent implements OnInit {

  public simulacoes: CompraDTO[];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.simulacoes = data.simulacoes;
    });
  }

  public buscarDetalhes(item) {
    console.log(item);

  }
}
