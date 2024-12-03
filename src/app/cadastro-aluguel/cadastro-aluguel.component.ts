import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { CarroService } from '../services/carro/carro.service';
import { ClienteService } from '../services/cliente/cliente.service';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";
import { AluguelService } from '../services/aluguel/aluguel.service';


@Component({
  selector: 'app-cadastro-aluguel',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, FloatLabelModule, CalendarModule, MenuModule, ToastModule, RippleModule, MenubarModule, NavBarComponent],
  templateUrl: './cadastro-aluguel.component.html',
  styleUrl: './cadastro-aluguel.component.scss',
  providers: [MessageService]
})
export class CadastroAluguelComponent implements OnInit {
  navegacao: MenuItem[] | undefined;
  
  constructor(private messageService: MessageService, public aluguelService: AluguelService, public carroService: CarroService, public clienteService: ClienteService, public colaboradorService: ColaboradorService){}
  
  ngOnInit(): void {
    this.carroService.getApiCarro();
    this.clienteService.getApiAluguel();
    this.colaboradorService.getApiAluguel();
  }
  
  enviarDados() {
   this.aluguelService.enviarDados();
   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Aluguel cadastrado com sucesso' });
  }
}