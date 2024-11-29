import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';

export interface Carro{
  idCarro?: number,
  modeloCarro: string,
  motorCarro?: string,
  kmRodado?: string
  anoFabricado?: string,
}

@Component({
  selector: 'app-cadastro-carro',
  standalone: true,
  imports: [FloatLabelModule,CommonModule,FormsModule,ButtonModule,MenuModule],
  templateUrl: './cadastro-carro.component.html',
  styleUrl: './cadastro-carro.component.scss'
})
export class CadastroCarroComponent implements OnInit{
  public carros: Carro[] = []
  
  navegacao: MenuItem[] | undefined;

  public carro ={
    modeloCarro: "",
    motorCarro: "",
    kmRodado: "",
    anoFabricado: ""
  }
  constructor(private http: HttpClient){}

  private apiUrl = "/api/carro"

  ngOnInit(): void{
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
                label: 'Lista de Carros',
                icon: 'pi pi-palette',
                route: '/carros'
              },
          ]
      }
    ];
  }

enviarDados() {
  if (!this.carro.modeloCarro || !this.carro.motorCarro || !this.carro.kmRodado || !this.carro.anoFabricado) {
    alert("Por favor, preencha todos os campos.");
    return;
    }
    this.carros.push(this.carro);
    this.postCarro();
  }
  
postCarro(){
  return this.http.post<Carro>(this.apiUrl,this.carro).subscribe(response =>{
    return response;
  })     
}

}
