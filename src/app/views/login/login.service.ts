import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { baseURL } from '../../config/baseURL';
import { Observable } from 'rxjs';
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
  @Output() errorResponse = new EventEmitter();

  response: Observable<User>;
  user: User;

  create (user: User): Observable<any> {
    this.response = this.http.post<any>(baseURL.url + '/login', user)
    .pipe(
      catchError(error => {
        this.errorResponse.emit(error.error);
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