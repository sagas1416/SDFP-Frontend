import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: any[] = [
    { nombre: 'Alicia en el pais de la maravillas ',
    descripcion: 'Libro de fantasia y aventura',
    img: 'assets/img/productos/libros/alicia.png',
    precio: '$15.50'
    },
    {
    nombre: 'El Cipitio',
    descripcion: 'Cuento tipico ',
    img: 'assets/img/productos/libros/cipitio.jpg',
    precio: '$2.50'
    },
 ];

 getProductos(){
  return this.productos;
}
  constructor() { }
}


