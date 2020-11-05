import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente.model';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {

  id: NumberSymbol;
  response: any;
  pedido: any;
  cliente: any;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const idPedido = this.route.snapshot.paramMap.get('id')
    this.id = Number(idPedido);

    this.response = this.pedidoService.show(this.id).subscribe(pedido => {
      this.pedido = pedido;
     
      this.clienteService.show(this.pedido.clienteId).subscribe(cliente => {
        this.cliente = cliente;
        console.log(this.pedido);
      })

    });
  }

  verPedido () {
    console.log(this.pedido)
  }

}
