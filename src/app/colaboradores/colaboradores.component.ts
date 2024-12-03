import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";
   
@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule, MenuModule, TableModule, MenubarModule, NavBarComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss'
})
export class ColaboradoresComponent implements OnInit {
  navegacao!: MenuItem[];
  
  constructor(public colaboradorService: ColaboradorService){}
  ngOnInit(): void {
  this.colaboradorService.getApiAluguel();  
  }
}
