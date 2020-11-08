import { Component, OnInit } from '@angular/core';
import { ProdutoService }  from '../produto.service';
import { Product } from '../produto';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {

  produtos: Product[] = [];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.index().subscribe(response => {
      this.produtos = response;
    })
  }

  delete (id) {
    console.log("Deletando...." + id)
  }
}
