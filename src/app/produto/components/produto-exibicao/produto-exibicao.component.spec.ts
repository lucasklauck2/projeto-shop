import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoExibicaoComponent } from './produto-exibicao.component';

describe('ProdutoExibicaoComponent', () => {
  let component: ProdutoExibicaoComponent;
  let fixture: ComponentFixture<ProdutoExibicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoExibicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
