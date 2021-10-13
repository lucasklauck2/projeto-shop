import { Component, Input, OnInit } from '@angular/core';
import { ProdutoDTO } from './../../../models/produto.dto';

@Component({
  selector: 'app-produto-exibicao',
  templateUrl: './produto-exibicao.component.html',
  styleUrls: ['./produto-exibicao.component.scss'],
})
export class ProdutoExibicaoComponent implements OnInit {
  @Input() produto: ProdutoDTO;

  valorInicial = 1;

  constructor() {}

  ngOnInit(): void {
    console.log(this.produto);
  }
}
