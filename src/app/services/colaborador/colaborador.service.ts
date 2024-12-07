import { Injectable } from '@angular/core';
import { Colaborador } from '../../models/interfaces/Colaborador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService{
  
  constructor(private http: HttpClient) { }

  private apiUrl = "/api/colaborador"
  
  public colaboradores!: Colaborador[];

  public colaborador: Colaborador = {
    nomeColaborador: "",
    emailColaborador: "",
    cargoColaborador: "",
    senhaColaborador: ""
  }

  getApiAluguel(){
    return this.http.get<Colaborador[]>(this.apiUrl).subscribe(response =>{
      this.colaboradores = response;
      return response;
    })
  }

  postColaborador(){
    return this.http.post<Colaborador>(this.apiUrl, this.colaborador).subscribe(response =>{
      return response
    })
  }

  enviarDados() {
    if(!this.colaborador.nomeColaborador || !this.colaborador.emailColaborador || !this.colaborador.cargoColaborador){
     alert("Por favor, preencha todos os campos")
     return
    }
    this.colaboradores.push(this.colaborador);
    this.postColaborador();
    alert("Colaborador foi cadastrado com sucesso")
 }
}
