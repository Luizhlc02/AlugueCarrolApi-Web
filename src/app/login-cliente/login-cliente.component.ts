import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [ButtonModule,FloatLabelModule, ToastModule,FormsModule,RouterModule, PasswordModule],
  templateUrl: './login-cliente.component.html',
  styleUrl: './login-cliente.component.scss',
  providers: [MessageService]
})
export class LoginClienteComponent {
  
  
  constructor(public loginService: LoginService, private messageService: MessageService){}
  
  enviarDados() {
    this.loginService.enviarDados();
  }
}
