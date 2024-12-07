import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ClienteService } from '../services/cliente/cliente.service';
import { AluguelService } from '../services/aluguel/aluguel.service';

@Component({
  selector: 'app-historico-cliente',
  standalone: true,
  imports: [ButtonModule,TableModule],
  templateUrl: './historico-cliente.component.html',
  styleUrl: './historico-cliente.component.scss'
})
export class HistoricoClienteComponent {

  constructor(public aluguelService: AluguelService, public clienteService: ClienteService){}


}
