import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
   
interface Colaborador{ 
   idColaborador: number,
   nomeColaborador: string,
   emailColaborador: string,
   cargoColaborador: string
  }
  
@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule, MenuModule, TableModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss'
})
export class ColaboradoresComponent implements OnInit {
  public colaboradores !: Colaborador[];
  
  navegacao: MenuItem[] | undefined;

  private apiUrl = "/api/colaborador"
  
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
              label: 'Cadastrar novo colaborador',
              icon: 'pi pi-palette',
              route: '/cadastrocolaborador'
          },
        ]
    }
  ];

  }
  getApiAluguel(){
    return this.http.get<Colaborador[]>(this.apiUrl).subscribe(response =>{
      this.colaboradores = response;
      return response;
    })
  }


}
