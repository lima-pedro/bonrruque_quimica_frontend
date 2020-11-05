import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './views/cliente/cliente.module';
import { ProdutoModule } from './views/produto/produto.module';
import { PedidoModule } from './views/pedido/pedido.module';

import { LoginComponent } from './views/login/login.component';
import { LoginService } from './views/login/login.service';
import { HeaderComponent } from './components/templates/header/header.component';
import { HomeComponent } from './views/home/home.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
