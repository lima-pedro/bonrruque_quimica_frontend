import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { baseURL } from '../../config/baseURL';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  token: string = localStorage.getItem('token');
  response: any;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

  index (): Observable<Cliente[]> {
    this.response =  this.http.get<Cliente[]>(baseURL.url + '/clients', {
      headers: {
        'Authorization': this.token
      }
    })
    return this.response;
  }

  show (id: number): Observable<Cliente> {
    this.response = this.http.get(baseURL.url + '/client/' +id, {headers: {
      'Authorization': this.token
    }});
    return this.response;
  }

  create (cliente: Cliente): Observable<Cliente> {
    this.response =  this.http.post<Cliente>(baseURL.url + '/client', cliente, {
      headers: {
        'Authorization': this.token
      }
    })
    this.router.navigate['/clients']
    return this.response;
  }
}