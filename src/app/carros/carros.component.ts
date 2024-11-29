import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

export interface Carro{
  idCarro: number,
  modeloCarro: String,
  motorCarro: String,
  kmRodado: String
  anoFabricado: String,
}

@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [CommonModule,MenuModule,TableModule,FormsModule],
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.scss'
})

export class CarrosComponent implements OnInit {
  private apiUrl = "/api/carro"

  navegacao: MenuItem[] | undefined;

  public carros!: Carro[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.getApiCarro();

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
                  label: 'Cadastrar um carro',
                  icon: 'pi pi-palette',
                  route: '/cadastrocarro'
              },
            ]
        }
      ];
  }
  getApiCarro(){  
     return this.http.get<Carro[]>(this.apiUrl).subscribe(response =>{
      this.carros = response;
      return response;
     }) 
  }
}
