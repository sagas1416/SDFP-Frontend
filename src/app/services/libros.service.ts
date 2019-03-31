import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: any[] = [
    { nombre: 'La estrategia oculta ',
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
    {
      nombre: 'Alicia en el pais de las maravillas',
      descripcion: 'Cuento infantil',
      img: 'assets/img/productos/libros/alicia.png',
      precio:'$12.50'
    }
 ];

 getLibros(){
  return this.libros;
}
  constructor() { }
}
