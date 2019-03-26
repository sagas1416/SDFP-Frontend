import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './user/registro/registro.component';
import { LoginComponent } from './user/login/login.component';
import { MenuComponent } from './menus/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './paginas/index/index.component';
import { ContactoComponent } from './informacion/contacto/contacto.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { MemuPrincipalComponent } from './menus/memu-principal/memu-principal.component';
import { Page404Component } from './paginas/page404/page404.component';
import { EstudiantilComponent } from './paginas/categorias/estudiantil/estudiantil.component';
import { OficinaComponent } from './paginas/categorias/oficina/oficina.component';
import { LibrosComponent } from './paginas/categorias/libros/libros.component';
import { PapeleriaComponent } from './paginas/categorias/papeleria/papeleria.component';

import { ProductosService } from './services/productos.service';
import { EstudiantilService } from './services/estudiantil.service';
import { OficinaService } from './services/oficina.service';
import { LibrosService } from './services/libros.service';
import { PapeleriaService } from './services/papeleria.service';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    ContactoComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    MemuPrincipalComponent,
    Page404Component,
    EstudiantilComponent,
    OficinaComponent,
    LibrosComponent,
    PapeleriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ProductosService,
  EstudiantilService,
  OficinaService,
  LibrosService,
  PapeleriaService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
