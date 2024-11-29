import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';

export interface Colaborador{ 
  idColaborador?: number,
  nomeColaborador?: string,
  emailColaborador?: string,
  cargoColaborador?: string
}

@Component({
  selector: 'app-cadastro-colaborador',
  standalone: true,
  imports: [FormsModule,CommonModule,FloatLabelModule,ButtonModule,MenuModule],
  templateUrl: './cadastro-colaborador.component.html',
  styleUrl: './cadastro-colaborador.component.scss'
})
export class CadastroColaboradorComponent implements OnInit {
  public colaboradores: Colaborador[] = []
  
  navegacao: MenuItem[] | undefined

  private apiUrl = "/api/colaborador"
 
ngOnInit():void{
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
              label: 'Lista de colaboradores ',
              icon: 'pi pi-palette',
              route: '/colaboradores'
          },
        ]
    }
  ];
}
  
enviarDados() {
   if(!this.colaborador.nomeColaborador || !this.colaborador.emailColaborador || !this.colaborador.cargoColaborador){
    alert("Por favor, preencha todos os campos")
    return
   }
   this.colaboradores.push(this.colaborador);
   this.postColaborador();
}

public colaborador= {
  nomeColaborador: "",
  emailColaborador: "",
  cargoColaborador: ""
}

constructor(private http: HttpClient){}

postColaborador(){
  return this.http.post<Colaborador>(this.apiUrl, this.colaborador).subscribe(response =>{
    return response
  })
}

}
