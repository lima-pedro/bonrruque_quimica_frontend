import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Product } from '../produto'; 

@Component({
  selector: 'app-cadasto-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent {

  produto: Product = {
    codigo: '',
    codigoInterno: '',
    nome: '',
    preco: '',
    volume: ''
  }
  
  constructor (
    private productService: ProdutoService
  ) {}

  create () {
    this.productService.create(this.produto).subscribe();
  }
}