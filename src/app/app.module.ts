//Acima as importações
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Import das Classes
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';


//Abaixo um decoration
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
    
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
