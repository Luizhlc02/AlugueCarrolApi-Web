import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-cadastro-colaborador',
  standalone: true,
  imports: [FormsModule, CommonModule, FloatLabelModule, ButtonModule, MenuModule, MenubarModule, NavBarComponent,ToastModule],
  templateUrl: './cadastro-colaborador.component.html',
  styleUrl: './cadastro-colaborador.component.scss',
  providers: [MessageService]
})
export class CadastroColaboradorComponent{
  navegacao: MenuItem[] | undefined
  
  constructor(public colaboradorService: ColaboradorService, private messageService: MessageService){}

enviarDados() {
  this.colaboradorService.enviarDados();
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Colaborador cadastrado com sucesso' });
}
}
