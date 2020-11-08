import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ProdutoService } from '../../produto/produto.service';
import { Pedido } from '../pedido.model';
import { Cliente } from '../../cliente/cliente.model';
import { Product } from '../../produto/produto';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {}

  idPedido: number;
  response: any;
  mostrarBotaoItens: boolean = false;

  cliente: Cliente = {
    nome: '',
    contato: '',
    logradouro: '',
    numeroEndereco: 0,
    bairro: '',
    cidade: '',
    uf: '',
    complementoEndereco: '',
  };

  pedido: Pedido = {
    id: 0,
    observacoes: '',
    pontoReferenciaEntrega: '',
    formaPagamento: '',
    dataEntrega: '',
    produtos_pedido: '',
    clienteId: 0
  };

  itens_pedido: Product[] = [];

  ngOnInit(): void {
    const idPedido = this.route.snapshot.paramMap.get('id')
    this.pedido.id = Number(idPedido);
    this.response = this.pedidoService.show(this.pedido.id).subscribe(pedido => {
      this.pedido = pedido;
      this.clienteService.show(this.pedido.clienteId).subscribe(cliente => {
        this.cliente = cliente;
        console.log(pedido)
        if (pedido) {
          this.criarArrayItensPedido()
          this.mostrarBotaoItens = true;
        }
      })
    });
  }

  criarArrayItensPedido () {
    let itens_pedido = this.pedido.produtos_pedido.split(',');
    for (let item of itens_pedido) {
      let item_number = Number(item);
      if (item_number === 0) continue;
      this.produtoService.show(item_number).subscribe(produto =>
        this.itens_pedido.push(produto)
      )
    }
  }


  montarTabelaItensPedido () { 
    let table = document.querySelector('.table');
    let buttonMostrarItens = document.querySelector('#btn-mostrarItensPedido')
    table.removeAttribute('style');
    buttonMostrarItens.classList.add('disabled');

    for (let row of this.itens_pedido) {
      console.log('entrou no for dos itens')
      let tbody = document.getElementById('corpo-tabela');
      let tr = document.createElement('tr');
      let tdCodigo = document.createElement('td');
      let tdCodigoInterno = document.createElement('td');
      let tdNome = document.createElement('td');
      let tdPreco = document.createElement('td');
      tdCodigo.innerHTML = row.codigo;
      tdCodigoInterno.innerHTML = row.codigoInterno;
      tdNome.innerHTML = row.nome;
      tdPreco.innerHTML = row.preco;
      tr.appendChild(tdCodigo);
      tr.appendChild(tdCodigoInterno);
      tr.appendChild(tdNome);
      tr.appendChild(tdPreco);
      tbody.appendChild(tr);
    }
  }


}
