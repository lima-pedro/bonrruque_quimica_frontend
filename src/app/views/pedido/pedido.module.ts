import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';

@NgModule({
  declarations: [
    CadastroPedidoComponent,
    ConsultaPedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PedidoModule { }
