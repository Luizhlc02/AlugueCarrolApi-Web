import { Injectable } from '@angular/core';
import { Cliente } from '../../models/interfaces/Cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  private apiUrl = "/api/cliente";
  
  public clientes!: Cliente[]  

  public cliente: Cliente = {
    nomeCliente: "",  
    cpfCliente: "",
    emailCliente:"", 
    telefoneCliente:"",
    senhaCliente:""
  }
  
  getApiAluguel(){
    return this.http.get<Cliente[]>(this.apiUrl).subscribe(response =>{
      this.clientes = response;
      return response;  
    })
  }
  postApiAluguel() {
    return this.http.post<Cliente[]>(this.apiUrl, this.cliente).subscribe(response => {
      this.clientes = response;
      return response;
    });
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
  
}
