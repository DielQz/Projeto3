import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioCategoriaComponent } from './cardapio-categoria.component';

describe('CardapioCategoriaComponent', () => {
  let component: CardapioCategoriaComponent;
  let fixture: ComponentFixture<CardapioCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
