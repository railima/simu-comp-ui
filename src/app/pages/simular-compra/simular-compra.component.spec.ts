import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularCompraComponent } from './simular-compra.component';

describe('SimularCompraComponent', () => {
  let component: SimularCompraComponent;
  let fixture: ComponentFixture<SimularCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimularCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
