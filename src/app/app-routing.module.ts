import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CadastroProdutoComponent } from './views/produto/cadastro-produto/cadastro-produto.component';
import { CadastroClienteComponent } from './views/cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroPedidoComponent } from './views/pedido/cadastro-pedido/cadastro-pedido.component';
import { ConsultaClienteComponent } from './views/cliente/consulta-cliente/consulta-cliente.component';
import { ConsultaProdutoComponent } from './views/produto/consulta-produto/consulta-produto.component';
import { ConsultaPedidoComponent } from './views/pedido/consulta-pedido/consulta-pedido.component';
import { DetalhesPedidoComponent } from './views/pedido/detalhes-pedido/detalhes-pedido.component';
 
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-pedido', component: CadastroPedidoComponent},
  {path: 'consulta-pedido', component: ConsultaPedidoComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'consulta-produto', component: ConsultaProdutoComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent},
  {path: 'consulta-cliente', component: ConsultaClienteComponent},
  {path: 'detalhes-pedido/:id', component: DetalhesPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
