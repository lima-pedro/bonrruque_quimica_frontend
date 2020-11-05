import { Component } from '@angular/core';
import { LoginService } from '../../../views/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (
    private loginService: LoginService,
    private router: Router
  ) {}


  mostrarMenu: boolean = false;  

  navItens = [
    { title: "Pedidos", subtitle: [
        { name: "Cadastro de pedidos", value: "cadastro-pedido"},
        { name: "Consulta de pedidos", value: "consulta-pedido"}
      ]
    },
    { title: "Produtos", subtitle: [
        { name: "Cadastro de produtos", value: "cadastro-produto"},
        { name: "Consulta de produtos", value: "consulta-produto"}
      ]
    },
    { title: "Cliente", subtitle: [
        { name: "Cadastro de cliente", value: "cadastro-cliente"},
        { name: "Consulta de cliente", value: "consulta-cliente"}
      ]
    },
  ]

  ngOnInit () {
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  logout () {
    localStorage.setItem('token', '');
    this.mostrarMenu = false;
    this.router.navigate(['']);
  }
}