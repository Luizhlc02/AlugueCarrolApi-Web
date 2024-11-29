import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';

export interface Aluguel {
  idAluguel?: number
  dataAluguel?: string
  dataVencimento?: string
  carro?: number 
  cliente?:  number
  colaborador?: number
};

export interface Carro{
  idCarro?: number,
  modeloCarro: string,
  motorCarro?: string,
  kmRodado?: string
  anoFabricado?: string,
}

export interface Cliente{
  idCliente?: number,
  nomeCliente?: String,
  cpfCliente?: String,
  emailCliente?: String,
  telefoneCliente?: String
}

export interface Colaborador{ 
  idColaborador?: number,
  nomeColaborador?: string,
  emailColaborador?: string,
  cargoColaborador?: string
 }

@Component({
  selector: 'app-cadastro-aluguel',
  standalone: true,
  imports: [CommonModule,FormsModule,DropdownModule,FloatLabelModule,CalendarModule,MenuModule],
  templateUrl: './cadastro-aluguel.component.html',
  styleUrl: './cadastro-aluguel.component.scss'
})
export class CadastroAluguelComponent implements OnInit {
  public alugueis: Aluguel[]=[]
  
  public carros!: Carro[];

  navegacao: MenuItem[] | undefined;
  
  public clientes!: Cliente[];
  
  public colaboradores!: Colaborador[];

  public aluguel = {
    dataAluguel: "",  
    dataVencimento: "",
    idCarro: 2 , 
    idCliente: 2 ,
    idColaborador: 3 
  }
  
  ngOnInit(): void {
      this.getAluguelApi();
      this.getCarro();
      this.getCliente();
      this.getColaborador();

      this.navegacao = [
        {
            label: 'Navegação',
            items: [
                {
                    label: 'Alugueis',
                    icon: 'pi pi-palette',
                    route: '/home'
                },
                {
                },
            ]
        }
      ];
  }
  
  enviarDados() {
    if (!this.aluguel.dataAluguel || !this.aluguel.dataVencimento || !this.aluguel.idCarro || !this.aluguel.idCliente || !this.aluguel.idColaborador) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    this.alugueis.push(this.aluguel);
    this.postApiAluguel();
    alert("aluguel cadastrado com sucesso!");

  }

  private apiUrl = "/api/aluguel";
 
  private carroUrl= "/api/carro";
 
  private clienteUrl= "/api/cliente"
 
  private colaboradorUrl= "/api/colaborador";
  
  constructor(private http: HttpClient){}
  
  ok(){
    return JSON.stringify(this.alugueis);
  }
  
  postApiAluguel(){
    return this.http.post<Aluguel>(this.apiUrl, this.aluguel ).subscribe(response =>{
      return response
    })
  }
 
  getAluguelApi() {
    return this.http.get<Aluguel[]>(this.apiUrl).subscribe(response => {
      console.log(response);
      this.alugueis = response;
      return response;
    });
  } 
 
  getCarro() {
    return this.http.get<Carro[]>(this.carroUrl).subscribe(response => {
      console.log(response);
      this.carros = response;
      return response;
    });
  }
  
  getCliente() {
    return this.http.get<Cliente[]>(this.clienteUrl).subscribe(response => {
      console.log(response);
      this.clientes = response;
      return response;
    });
  }
  
  getColaborador(){
      return this.http.get<Colaborador[]>(this.colaboradorUrl).subscribe(response => {
        console.log(response);
        this.colaboradores = response;
        return response;
      }); 
    }
}