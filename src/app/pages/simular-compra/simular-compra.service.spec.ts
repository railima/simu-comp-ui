import { TestBed } from '@angular/core/testing';

import { SimularCompraService } from './simular-compra.service';

describe('SimularCompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimularCompraService = TestBed.get(SimularCompraService);
    expect(service).toBeTruthy();
  });
});
