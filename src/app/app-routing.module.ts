import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './paginas/index/index.component';
import { RegistroComponent } from './user/registro/registro.component';
import { LoginComponent } from './user/login/login.component';
import { ContactoComponent } from './informacion/contacto/contacto.component';
import { PaginaPrincipalComponent } from "./paginas/pagina-principal/pagina-principal.component";
import { Page404Component } from './paginas/page404/page404.component';
import { EstudiantilComponent } from './paginas/categorias/estudiantil/estudiantil.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'Principal', component: PaginaPrincipalComponent},
  {path: 'estudiantil', component: EstudiantilComponent},
  {path: '**', component: Page404Component },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
