import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  constructor (
    private clienteService: ClienteService,
    private router: Router
  ) {}

  cliente: Cliente = {
    nome: '',
    contato: '',
    logradouro: '',
    numeroEndereco: 0,
    bairro: '',
    cidade: '',
    uf: '',
    complementoEndereco: ''
  }

  create () {
    this.clienteService.create(this.cliente).subscribe();
    this.router.navigate(['/consulta-cliente'])
  }

}