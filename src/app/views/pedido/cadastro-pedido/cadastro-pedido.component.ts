import { Component} from '@angular/core';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente.model';
import { ProdutoService } from '../../produto/produto.service';
import { Product } from '../../produto/produto';
import { Pedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent {

  clientes: Cliente[];
  produtos: Product[];
  carregandoCliente: boolean = false;
  carregandoProdutos: boolean = false;

  pedido: Pedido = {
    observacoes: '',
    pontoReferenciaEntrega: '',
    formaPagamento: '',
    dataEntrega: '',
    produtos_pedido: '',
    clienteId: 0
  }

  produtos_pedido: number[] = [];

  constructor (
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService
  ) {}

  create () {
    this.pedidoService.create(this.pedido).subscribe();
  }

  indexClients () {
    this.clienteService.index().subscribe(clientes => {
      this.clientes = clientes
    });
  }

  criarBoxClientes (idCliente: number) {
    this.carregandoCliente = true;

    const btnAdicionarCliente = document.querySelector("#botao-adicionar-cliente");
    btnAdicionarCliente.classList.add('disabled');

    this.clienteService.show(idCliente).subscribe(cliente => {

      // Salvando o ID do cliente no pedido para cadastro no banco
      this.pedido.clienteId = idCliente;
      
      const form = document.querySelector('.form');
      const inputGroup = document.querySelector('.input-group');
      const inputNome = document.createElement('input');
      const inputContato = document.createElement('input');
      const inputEndereco = document.createElement('input');
      const inputComplemento = document.createElement('input');

      inputNome.classList.add('form-control');
      inputNome.style.marginBottom = '8px';
      inputContato.classList.add('form-control');
      inputContato.style.marginLeft = '4px';
      inputContato.style.marginBottom = '8px';
      inputEndereco.classList.add('form-control');
      inputEndereco.style.marginBottom = '8px';
      inputComplemento.classList.add('form-control');
      inputComplemento.style.marginBottom = '8px';

      inputNome.value = cliente.nome;
      inputContato.value = cliente.contato;
      inputEndereco.value = `${cliente.logradouro} , N°${cliente.numeroEndereco} - ${cliente.cidade} / ${cliente.uf}`;
      inputComplemento.value = cliente.complementoEndereco;

      inputGroup.appendChild(inputNome);
      inputGroup.appendChild(inputContato);
      form.appendChild(inputEndereco);
      form.appendChild(inputComplemento);

    })    
  }

  indexItensPedido () {
    this.produtoService.index().subscribe(produtos => {
      this.produtos = produtos;
    })

  }

  criarBoxProdutos (idProduto: number) {
    this.carregandoProdutos = true;

    this.produtoService.show(idProduto).subscribe(produto => {

      // Salvando os ID's dos produtos no pedido
      // this.pedido.produtos_pedido += `${idProduto},`;

      // salvamos o id dos produtos dentro de um array
      this.produtos_pedido.push(idProduto);

      const tbody = document.querySelector('.tbody');
      const tr = document.createElement('tr');
      const tdCodigo = document.createElement('td');
      const tdNome = document.createElement('td');
      const tdPreco = document.createElement('td');
      const tdBtnExcluir = document.createElement('td');
      tdBtnExcluir.classList.add('btn-excluir');

      tr.setAttribute("id", `${idProduto}`);

      // Button excluir produto
      const btnExcluir = document.createElement('button');
      btnExcluir.classList.add('btn');
      btnExcluir.classList.add('btn-danger');
      btnExcluir.classList.add('btn-sm');
      btnExcluir.innerHTML = 'X';

      btnExcluir.onclick = function () {
        document.getElementById(`${idProduto}`).remove();
      }

      tdCodigo.innerHTML = produto.codigo;
      tdNome.innerHTML = produto.nome;
      tdPreco.innerHTML = produto.preco;
      tdBtnExcluir.appendChild(btnExcluir);

      tr.appendChild(tdCodigo);
      tr.appendChild(tdNome);
      tr.appendChild(tdPreco);
      tr.appendChild(tdBtnExcluir);

      tbody.appendChild(tr);
      console.log(this.produtos_pedido);
    });   
  }

  removerCliente() {
    this.carregandoCliente = false;
    const btnAdicionarCliente = document.querySelector("#botao-adicionar-cliente");
    btnAdicionarCliente.classList.remove('disabled');
  }

}
