import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent {

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.index().subscribe(response => {
      this.clientes = response;
    });
  }
}
