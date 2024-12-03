import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from '../componentes/nav-bar/nav-bar.component';
import { ClienteService } from '../services/cliente/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule,FloatLabelModule,ButtonModule,ToastModule,NavBarComponent],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
enviarDados() {}
  constructor(public clienteService: ClienteService){}
}
