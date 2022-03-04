import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListaAtmsComponent } from './pages/lista-atms/lista-atms.component';
import { CadastroAtmComponent } from './pages/cadastro-atm/cadastro-atm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaAtmsComponent,
    CadastroAtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
