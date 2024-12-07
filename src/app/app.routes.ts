import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { CarrosComponent } from './carros/carros.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CadastroAluguelComponent } from './cadastro-aluguel/cadastro-aluguel.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';
import { AluguelComponent } from './aluguel/aluguel.component';
import { HomeComponent } from './home/home.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginColaboradorComponent } from './login-colaborador/login-colaborador.component';
import { HistoricoClienteComponent } from './historico-cliente/historico-cliente.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "historicocliente", component: HistoricoClienteComponent},
    { path: "logincliente", component: LoginClienteComponent},
    { path: "logincolaborador", component: LoginColaboradorComponent},
    { path: "historicoalugueis", component: AluguelComponent},
    { path: "clientes", component: ClientesComponent},
    { path: "carros", component: CarrosComponent},
    { path: "colaboradores", component: ColaboradoresComponent},
    { path: "cadastrocliente", component: CadastroClientesComponent},   
    { path: "cadastroaluguel", component: CadastroAluguelComponent},
    { path: "cadastrocarro", component: CadastroCarroComponent},
    { path: "cadastrocolaborador", component: CadastroColaboradorComponent}
];
