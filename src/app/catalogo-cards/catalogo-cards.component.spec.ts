import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCardsComponent } from './catalogo-cards.component';

describe('CatalogoCardsComponent', () => {
  let component: CatalogoCardsComponent;
  let fixture: ComponentFixture<CatalogoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
