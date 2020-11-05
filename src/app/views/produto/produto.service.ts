import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './produto';
import { baseURL } from '../../config/baseURL';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Product;
  token: string = localStorage.getItem('token');
  response: any;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

  index (): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL.url + '/products', {
      headers: {
        'Authorization': this.token
      }
    })
  }

  create (produto: Product): Observable<Product> {
    this.response = this.http.post<Product>(baseURL.url + '/product', produto, {
      headers: {
        'Authorization': this.token
      }
    });
    this.router.navigate(['/consulta-produto']);
    return this.response;
  }

  show (id: number): Observable<Product> {
    this.response = this.http.get(baseURL.url + '/product/' +id, {
      headers: {
        'Authorization': this.token
      }
    })
    return this.response;
  }
}