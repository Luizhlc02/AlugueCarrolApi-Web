import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../../Models/interfaces/Carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  private apiUrl = "/api/carro"
  
  public carros!: Carro[];

  public carro ={
    modeloCarro: "",
    motorCarro: "",
    kmRodado: "",
    anoFabricado: ""
  }
  
  getApiCarro(){  
    return this.http.get<Carro[]>(this.apiUrl).subscribe(response =>{
     this.carros = response;
     return response;
    }) 
 }

 postCarro(){
   return this.http.post<Carro>(this.apiUrl,this.carro).subscribe(response =>{
     return response;
   })     
 }

 enviarDados() {
  if (!this.carro.modeloCarro || !this.carro.motorCarro || !this.carro.kmRodado || !this.carro.anoFabricado) {
    alert("Por favor, preencha todos os campos.");
    return;
    }
    this.carros.push(this.carro);
    this.postCarro();
    alert("Carro cadastrado com sucesso!")
  }
  
}
