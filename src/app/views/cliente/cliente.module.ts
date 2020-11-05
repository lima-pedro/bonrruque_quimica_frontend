import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    ConsultaClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClienteModule {}