import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: any[] = [
    { nombre: 'Libros ',
    descripcion: 'estrategias',
    img: 'assets/img/productos/libros/estrategias.png',
    precio: '$5.50'
    },
    {
    nombre: 'Principito',
    descripcion: ' El principito ',
    img: 'assets/img/productos/libros/Principito.jpg',
    precio: '$2.00'
    },
 ];

 getLibros(){
  return this.libros;
}
  constructor() { }
}
