import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NavBarComponent } from '../componentes/nav-bar/nav-bar.component';
import { ClienteService } from '../services/cliente/cliente.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ButtonModule,FloatLabelModule,FormsModule,ToastModule,NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
receberDados() {
throw new Error('Method not implemented.');
}
  constructor(public clienteService: ClienteService, private messageService: MessageService){}
  

}
