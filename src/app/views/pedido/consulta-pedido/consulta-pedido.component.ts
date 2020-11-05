import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {

  pedidos: Pedido;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.pedidoService.index().subscribe(orders => {
      this.pedidos = orders
    });

    // this.pedidoService.showClient(this.pedidos.clientId).subscribe(cliente => {
    //   console.log(cliente);
    // })
  }

}
