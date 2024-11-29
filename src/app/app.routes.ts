import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CarrosComponent } from './carros/carros.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CadastroAluguelComponent } from './cadastro-aluguel/cadastro-aluguel.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "clientes", component: ClientesComponent},
    { path: "carros", component: CarrosComponent},
    { path: "colaboradores", component: ColaboradoresComponent},
    { path: "cadastrocliente", component: CadastroClientesComponent },   
    { path: "cadastroaluguel", component: CadastroAluguelComponent},
    { path: "cadastrocarro", component: CadastroCarroComponent},
    { path: "cadastrocolaborador", component: CadastroColaboradorComponent}
];
