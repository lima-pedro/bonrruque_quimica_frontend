import { Component } from '@angular/core';
import { User } from './user.model';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  senha: string;  
  user: User = {
    email: '',
    senha: ''
  }
  user$: Observable<User>;
  exibeErroLogin: boolean = false;
  exibeAlertaLogout: boolean = false;

  constructor (
    private service: LoginService,
  ) {}

  create () {    
    this.user$ = this.service.create(this.user).pipe();

    this.service.errorResponse.subscribe(error => {
      if (error) {
        this.exibeErroLogin = true;
        this.user.email = '';
        this.user.senha = '';
      }
    })
  }
}
