import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { CarroService } from '../services/carro/carro.service';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { Carro } from '../models/interfaces/Carro';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";

@Component({
  selector: 'app-cadastro-carro',
  standalone: true,
  imports: [FloatLabelModule, CommonModule, FormsModule, ButtonModule, MenuModule, ToastModule, RippleModule, MenubarModule, NavBarComponent],
  templateUrl: './cadastro-carro.component.html',
  styleUrl: './cadastro-carro.component.scss',
  providers: [MessageService]
})
export class CadastroCarroComponent{
  public carros: Carro[] = []
  
  navegacao: MenuItem[] | undefined;

  constructor(public carroService: CarroService, private messageService: MessageService){}

enviarDados() {
  this.carroService.enviarDados();
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Carro cadastrado com sucesso' });
}
}
