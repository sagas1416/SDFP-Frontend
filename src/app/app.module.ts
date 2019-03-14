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

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
