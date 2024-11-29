import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

export interface Cliente{
   idCliente?: number,
   nomeCliente?: String,
   cpfCliente?: String,
   emailCliente?: String,
   telefoneCliente?: String
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuModule,TableModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  navegacao: MenuItem[] | undefined
  
  private apiUrl = "/api/cliente";
  
  public clientes !: Cliente[]  

  public cliente: Cliente = {
    nomeCliente: ""
  }

  constructor(private http: HttpClient){}
  ngOnInit(): void { 
  this.getApiAluguel();

  this.navegacao = [
    {
        label: 'Navegação',
        items: [
            {
                label: 'Home',
                icon: 'pi pi-palette',
                route: '/home'
            },
            {
              label: 'Cadastrar Clientes',
              icon: 'pi pi-palette',
              route: '/cadastrocliente'
          },
        ]
    }
  ];
}

getApiAluguel(){
  return this.http.get<Cliente[]>(this.apiUrl).subscribe(response =>{
    this.clientes = response;
    return response;  
  })
}
postApiAluguel() {
  return this.http.post<Cliente[]>(this.apiUrl, null).subscribe(response => {
    this.clientes = response;
    return response;
  });
}
}