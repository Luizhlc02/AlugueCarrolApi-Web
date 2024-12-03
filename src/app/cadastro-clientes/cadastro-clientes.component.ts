import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { ClienteService } from '../services/cliente/cliente.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuModule, FloatLabelModule, ButtonModule, MenubarModule, NavBarComponent,ToastModule],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.scss',
  providers: [MessageService]
})
export class CadastroClientesComponent{
  
  navegacao: MenuItem[] | undefined
  
  constructor(public clienteService: ClienteService, private messageService: MessageService){}
  
  enviarDados() {
    this.clienteService.enviarDados();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cliente cadastrado com sucesso' });
  }
}
