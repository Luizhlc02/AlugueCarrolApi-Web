import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AluguelDTO } from '../../home/home.component';
import { Aluguel } from '../../Models/interfaces/Aluguel';
import { Page } from '../../Models/interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  
  private apiUrl= '/api/aluguel';
  
  public alugueis: Aluguel[] = [];
  
  public aluguel = {
    dataAluguel: "",  
    dataVencimento: "",
    idCarro: null , 
    idCliente: null ,
    idColaborador: null 
  }

  public page!: Page;
  
  getAluguelApi(page: number = 0, size: number = 15, sortBy: string = 'idAluguel', ascending: boolean = true) {
    const options = { params: new HttpParams()
      .set('page', page)
      .set('size',size)
      .set('sortBy',sortBy)
      .set('ascending',ascending)
    }

    return this.http.get<AluguelDTO>(this.apiUrl, options).subscribe(response => {
      this.alugueis = response.content;
      this.page = response.page;
    });
  }
 
  postApiAluguel(){
    return this.http.post<Aluguel>(this.apiUrl, this.aluguel ).subscribe(response =>{
      return response
    })
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
}
