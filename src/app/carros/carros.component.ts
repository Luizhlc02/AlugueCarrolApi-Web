import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { CarroService } from '../services/carro/carro.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from "../componentes/nav-bar/nav-bar.component";

@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [CommonModule, MenuModule, TableModule, FormsModule, MenubarModule, NavBarComponent],
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.scss'
})

export class CarrosComponent implements OnInit {
  navegacao: MenuItem[] | undefined;

  constructor(public carroService: CarroService){}

  ngOnInit(): void {
      this.carroService.getApiCarro();
  }
}
