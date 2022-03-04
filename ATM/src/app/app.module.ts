import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListaAtmsComponent } from './pages/lista-atms/lista-atms.component';
import { CadastroAtmComponent } from './pages/cadastro-atm/cadastro-atm.component';
import { HttpClientModule } from '@angular/common/http';
import { ReplacePipe } from './pipes/replace.pipe';
import { InfoAtmComponent } from './pages/info-atm/info-atm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaAtmsComponent,
    CadastroAtmComponent,
    ReplacePipe,
    InfoAtmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
