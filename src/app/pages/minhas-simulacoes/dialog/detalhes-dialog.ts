import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompraDTO } from '../../../entities/compraDTO';

@Component({
  selector: 'app-detalhes-dialog',
  templateUrl: 'detalhes-dialog.html',
  styleUrls: ['./detalhes-dialog.scss']
})
export class DetalhesDialogComponent implements OnInit{

  public compra: CompraDTO;

  constructor(
    public dialogRef: MatDialogRef<DetalhesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.compra = this.data.simulacao;
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
