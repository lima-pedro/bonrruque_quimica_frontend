import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { baseURL } from '../../config/baseURL';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

  @Output() mostrarMenuEmitter = new EventEmitter<boolean>();

  response: Observable<User>;
  errorResponse: any;
  user: User;
  baseURL: any = baseURL.url;

  create (user: User): Observable<any> {
    this.response = this.http.post<any>(this.baseURL + '/login', user)
    .pipe(
      catchError(error => {
        this.errorResponse = error.error
        this.mostrarMenuEmitter.emit(false);
        return error.error;
      })
    )
    this.response.subscribe(response => {
      localStorage.setItem("token", response.token);
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home']);
    })
    
    return this.response;
  } 
}