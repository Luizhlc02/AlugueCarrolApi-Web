import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-colaborador',
  standalone: true,
  imports: [ButtonModule,ToastModule,FloatLabelModule,CommonModule,FormsModule,RouterModule,PasswordModule],
  templateUrl: './login-colaborador.component.html',
  styleUrl: './login-colaborador.component.scss',
  providers: [MessageService]
})
export class LoginColaboradorComponent {

  constructor(public colaboradorService: ColaboradorService, private messageService: MessageService){}

  senha!: String;

  enviarDados() {

    
}

}
