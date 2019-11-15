export class ParcelaInfo {
  dataVencimento: Date;
  valorJurosSimples: number;

  constructor(init?: Partial<ParcelaInfo>) {
    Object.assign(this, init);
  }
}
