import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAtmComponent } from './pages/cadastro-atm/cadastro-atm.component';
import { InfoAtmComponent } from './pages/info-atm/info-atm.component';
import { ListaAtmsComponent } from './pages/lista-atms/lista-atms.component';

const routes: Routes = [
  {
    path: 'listar-atm',
    component: ListaAtmsComponent
  },
  {
    path: 'cadastrar-atm',
    component: CadastroAtmComponent
  },
  {
    path: 'info-atm/:id',
    component: InfoAtmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
