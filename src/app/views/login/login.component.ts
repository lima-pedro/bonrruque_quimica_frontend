import { Component } from '@angular/core';
import { User } from './user.model';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../../components/templates/header/header.component';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  senha: string;  
  user: User = {
    "email": '',
    "senha": ''
  }
  user$: Observable<User>;
  exibeErroLogin: boolean = false;
  exibeAlertaLogout: boolean = false;

  constructor (
    private service: LoginService,
    private headerComponet: HeaderComponent
  ) {}

  // ngOnInit () {
  //   this.headerComponet.mostrarAlertaLogout.subscribe(mostrarAlertaLogout => {
  //     this.exibeAlertaLogout = mostrarAlertaLogout;
  //   })
  // }

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
