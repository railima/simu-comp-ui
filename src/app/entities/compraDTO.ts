import { ParcelaInfo } from './parcela-info';

export class CompraDTO {
  id: number;
  descricao: string;
  juros: number;
  data: Date;
  quantidadeParcela: number;
  valor: number;
  valorTotalJurosSimples: number;
  parcelas: ParcelaInfo[];

  constructor(init?: Partial<CompraDTO>) {
    Object.assign(this, init);
  }

}
