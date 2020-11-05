import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';

@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ConsultaProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProdutoModule {}