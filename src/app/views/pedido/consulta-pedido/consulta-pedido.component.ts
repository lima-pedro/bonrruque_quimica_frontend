import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {

  pedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.pedidoService.index().subscribe(orders => {
      this.pedidos = orders
    });
    
  }
}
