import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { LoginService } from './login.service';
import { empty, Observable } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  senha: string;  
  user: User;
  user$: Observable<User>;

  constructor (
    private service: LoginService,
    private router: Router
  ) {}

  create () {
    this.user = {
      "email": this.email,
      "senha": this.senha
    }

    this.user$ = this.service.create(this.user).pipe();    
  }



}


