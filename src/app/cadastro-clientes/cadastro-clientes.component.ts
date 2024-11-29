import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';

export interface Cliente{
  idCliente?: number,
  nomeCliente?: string,
  cpfCliente?: string,
  emailCliente?: string,
  telefoneCliente?: string
}
@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [CommonModule,FormsModule,MenuModule,FloatLabelModule,ButtonModule],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.scss'
})
export class CadastroClientesComponent implements OnInit{
  public clientes: Cliente[]=[]
  
  navegacao: MenuItem[] | undefined

  public cliente: Cliente = {
    nomeCliente: "",  
    cpfCliente: "",
    emailCliente:"", 
    telefoneCliente:"",
  }
  
  enviarDados() {
    if (!this.cliente.nomeCliente || !this.cliente.cpfCliente || !this.cliente.emailCliente || !this.cliente.telefoneCliente) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    this.clientes.push(this.cliente);
    this.postApiAluguel();
    alert("Cliente cadastrado com sucesso!");

  }
  
  private apiUrl = "/api/cliente";
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {

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
                label: 'Lista de clientes ',
                icon: 'pi pi-palette',
                route: '/clientes'
            },
          ]
      }
    ];
  }

  ok(){
    return JSON.stringify(this.clientes);
  }
  postApiAluguel() {
    return this.http.post<Cliente[]>(this.apiUrl, this.cliente).subscribe(response => {
      this.clientes = response;
      return response;
    });
  }
}
