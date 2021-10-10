import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProdutoExibicaoComponent } from './components/produto-exibicao/produto-exibicao.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [ProdutoComponent, ProdutoExibicaoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class ProdutoModule {}
