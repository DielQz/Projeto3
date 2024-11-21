import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioProdutoComponent } from './cardapio-produto.component';

describe('CardapioProdutoComponent', () => {
  let component: CardapioProdutoComponent;
  let fixture: ComponentFixture<CardapioProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
