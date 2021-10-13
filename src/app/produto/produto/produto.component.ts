import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from './../../models/produto.dto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  listaProduto: Array<ProdutoDTO> = new Array();

  constructor() {}

  ngOnInit(): void {
    this.listaProduto.push(
      new ProdutoDTO(
        1,
        'Camiseta Básica - Branca',
        'Descrição',
        10,
        'https://digaspi.vteximg.com.br/arquivos/ids/177795-500-500/CAMISETA-BASICA-GOLA-CARECA-3000-BRANCO-P.jpg?v=637456327535770000'
      )
    );

    this.listaProduto.push(
      new ProdutoDTO(
        2,
        'Camiseta Polo - Preta',
        'Descrição',
        19.99,
        'https://www.aguiarealstore.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/polo_preta_1_.png'
      )
    );

    this.listaProduto.push(
      new ProdutoDTO(
        3,
        'Camiseta Polo Hurley - Cinza',
        'Descrição',
        24.99,
        'https://centralsurf.vteximg.com.br/arquivos/ids/226719-1000-1000/Camiseta-Polo-Hurley-Start.jpg?v=636734843271030000'
      )
    );

    this.listaProduto.push(
      new ProdutoDTO(
        4,
        'Camiseta ET Doido - Preta',
        'Descrição',
        23.99,
        'http://d3ugyf2ht6aenh.cloudfront.net/stores/974/635/products/camiseta-preta-masculina-et-doido1-fc9457d399e8bacf3d16234321434806-640-0.png'
      )
    );

    this.listaProduto.push(
      new ProdutoDTO(
        5,
        'Camiseta Levis - Cinza',
        'Descrição',
        29.99,
        'https://static.netshoes.com.br/produtos/camiseta-levis-logo-batwing-classic-masculina/10/D74-2053-010/D74-2053-010_zoom1.jpg'
      )
    );

    console.log(this.listaProduto);
  }
}
