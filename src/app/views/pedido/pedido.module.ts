import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { DetalhesPedidoComponent } from './detalhes-pedido/detalhes-pedido.component';

@NgModule({
  declarations: [
    CadastroPedidoComponent,
    ConsultaPedidoComponent,
    DetalhesPedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PedidoModule { }
