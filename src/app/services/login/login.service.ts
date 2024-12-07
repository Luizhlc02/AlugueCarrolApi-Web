import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }
  
  private apiUrl = "/api/auth"

  public logins: Login[] = [];

  public login: Login = {
    email: "" ,
    senha: ""
  }


  postLoginCliente(){
    return this.http.post<Login>(this.apiUrl, this.login).subscribe(response =>{
      return response
    })
  }

  enviarDados() {
    if(!this.login.email || !this.login.senha ){
     alert("Por favor, preencha todos os campos")
     return
    }
    this.logins.push(this.login);
    this.postLoginCliente();
 }

}
