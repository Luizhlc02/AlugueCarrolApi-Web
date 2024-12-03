import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule,CommonModule,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  navegacao: MenuItem[] | undefined;

  mandaNavBar: any;

  constructor(private router : Router){}
  
  ngOnInit(): void {
    this.navegacao = [
      {
        label: 'Alugueis',
        icon: 'pi pi-home',
        route: '/home'
      },
      {
        label: 'Carros ',
        icon: 'pi pi-car',
        route: '/carros'
      },
      {
        label: 'Clientes ',
        icon: 'pi pi-user',
        route: '/clientes'
      },
      {
        label: 'Colaboradores ',
        icon: 'pi pi-users',
        route: '/colaboradores'
      }, 
      {
        label: 'Cadastrar',
        icon:'pi pi-angle-down',
        items: [
              {
                  label: 'Aluguel',
                  icon: 'pi pi-users',
                  route: '/cadastroaluguel'
              },
              {
                  label: 'Carro',
                  icon: 'pi pi-car',
                  route: '/cadastrocarro'
              },
              {
                label: 'Cliente',
                icon: 'pi pi-users',
                route: '/cadastrocliente'
              },
              {
                label: 'Colaborador',
                icon: 'pi pi-users',
                route: '/cadastrocolaborador'
              } 
          ],
        }, 
    ];
  }
}
