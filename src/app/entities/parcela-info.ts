export class ParcelaInfo {
  dataVencimento: Date;
  valorJurosSimples: number;
  valor: number;
  numero: number;

  constructor(init?: Partial<ParcelaInfo>) {
    Object.assign(this, init);
  }
}
