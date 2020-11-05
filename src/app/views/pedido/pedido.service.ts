import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from './pedido.model';
import { Observable } from 'rxjs';
import { baseURL } from '../../config/baseURL';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  token: string = localStorage.getItem('token');
  response: any;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

  index (): Observable<Pedido> {
    return this.http.get(baseURL.url + '/orders', {
      headers: {
      'Authorization': this.token
     }
    })
  }

  show (id: number) {
    return this.http.get(baseURL.url + '/order/' +id, {
      headers: {
        'Authorization': this.token
       }
    })
  }

  create (pedido: Pedido) {
    console.log(pedido);
    this.response =  this.http.post(baseURL.url + '/order', pedido, {
      headers: {
        'Authorization': this.token
       }
    })
    this.router.navigate(['/consulta-pedido']);
    return this.response;
  }
  
}