import { Carro } from "./Carro"
import { Cliente } from "./Cliente"
import { Colaborador } from "./Colaborador"

export interface Aluguel {
    idAluguel?: number
    dataAluguel: string
    dataVencimento: string
    carro?: Carro 
    cliente?: Cliente
    colaborador?: Colaborador
    statusAluguel: boolean
  }