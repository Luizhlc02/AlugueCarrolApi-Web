import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

export class Aluguel {
  idAluguel?: number
  dataAluguel?: string
  dataVencimento?: string
  carro?: Carro 
  cliente?: Cliente
  colaborador?: Colaborador
}

export interface Page {
  size: number,
  number: number,
  totalElements: number,
  totalPages:number
}

export interface AluguelDTO {
  content: Aluguel[]
  page: Page
}

export interface Carro {
  idCarro: number,
  modeloCarro: String,
  motorCarro: String,
  kmRodado: String
  anoFabricado: String,
}

export interface Cliente {
  idCliente?: number,
  nomeCliente?: String,
  cpfCliente?: String,
  emailCliente?: String,  
  telefoneCliente?: String
}

export interface Colaborador{ 
  idColaborador: number,
  nomeColaborador: string,
  emailColaborador: string,
  cargoColaborador: string
 }
 
 export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
 

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [CommonModule,MenuModule,RouterLink,TableModule,TagModule,PaginatorModule,CalendarModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  navegacao: MenuItem[] | undefined;

  public page!: Page;

  first?: number = 0;

  rows?:number = 15 ;
  
  
  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;
    console.log(event.page, event.pageCount);
    
    this.getAluguelApi();
  }
  
  ngOnInit(): void {
    this.getAluguelApi();
    this.getCarro();
    this.getCliente();
    this.getColaborador();

    this.navegacao = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Carros',
            icon: 'pi pi-palette',
            route: '/carros'
          },
          {
                  label: 'Clientes',
                  icon: 'pi pi-link',
                  route: '/clientes'
                },
                {
                  label: 'Colaboradores',
                  icon: 'pi pi-home',
                  route: '/colaboradores'
                }
              ]
            }
          ];
        }
        
        
  private apiUrl= '/api';
  
  private carroUrl= "/api/carro";
  
  private clienteUrl= "/api/cliente"
  
  private colaboradorUrl= "/api/colaborador";
  
  public alugueis!: Aluguel[];
  
  public carros!: Carro[];
  
  public clientes!: Cliente[];
  
  public colaboradores!: Colaborador[];
  

  constructor(private http: HttpClient, private router : Router) {} 

  getAluguelApi() {
    return this.http.get<AluguelDTO>(this.apiUrl).subscribe(response => {
      this.alugueis = response.content;
      this.page = response.page;
      return response;
    });
  }
   
  getCarro() {
    return this.http.get<Carro[]>(this.carroUrl).subscribe(response => {
      this.carros = response;
      return response;
    });
  }

  getCliente() {
    return this.http.get<Cliente[]>(this.clienteUrl).subscribe(response => {
      this.clientes = response;
      return response;
    });
  }

  getColaborador() {
      return this.http.get<Colaborador[]>(this.colaboradorUrl).subscribe(response => {
        this.colaboradores = response;
        return response;
      }); 
    }
}