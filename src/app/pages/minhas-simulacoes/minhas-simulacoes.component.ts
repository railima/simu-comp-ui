import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CompraDTO } from '../../entities/compraDTO';
import { DetalhesDialogComponent } from './dialog/detalhes-dialog';

@Component({
  selector: 'app-minhas-simulacoes',
  templateUrl: './minhas-simulacoes.component.html',
  styleUrls: ['./minhas-simulacoes.component.scss']
})
export class MinhasSimulacoesComponent implements OnInit {

  public simulacoes: CompraDTO[];

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.simulacoes = data.simulacoes;
    });
  }

  public abrirDialog(simulacao: CompraDTO) {
    this.dialog.open(DetalhesDialogComponent, {
      data: {simulacao}
    });
  }
}
