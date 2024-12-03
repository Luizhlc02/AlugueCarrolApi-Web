import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ClienteService } from '../services/cliente/cliente.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuModule, TableModule, MenubarModule, NavBarComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  navegacao: MenuItem[] | undefined

  constructor(public clienteService: ClienteService){}
  
  ngOnInit(): void { 
    this.clienteService.getApiAluguel();
  }
}