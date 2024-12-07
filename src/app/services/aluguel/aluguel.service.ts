import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluguel } from '../../models/interfaces/Aluguel';
import { Page } from '../../models/interfaces/Page';
import { AluguelDTO } from '../../aluguel/aluguel.component';


@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  constructor(private http: HttpClient) { }

  private apiUrl= '/api/aluguel';  

 // private getByIdUrl= '/api/aluguel';
 
 public alugueis: Aluguel[] = [];
 public aluguelbyId!: Aluguel;
 public aluguelByIdCliente!: Aluguel
 
  public aluguel = {
    dataAluguel: "",  
    dataVencimento: "",
    idCarro: null , 
    idCliente: null ,
    idColaborador: null,
    statusAluguel: false
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
  getAluguelById(id: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Aluguel>(url).subscribe(response => {
      this.aluguelbyId = response;  
      console.log(response);
      
    });
  }
  postApiAluguel(){
    return this.http.post<Aluguel>(this.apiUrl, this.aluguel ).subscribe(response =>{
      return response
    })
  }
  putStatus(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Aluguel>(url, this.aluguel).subscribe(response=>{
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
  }
}
