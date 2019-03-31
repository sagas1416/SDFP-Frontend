import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantilService {
  private estudiantil: any[] = [
    { nombre: 'Colores ',
    descripcion: 'los mejores colores para ti',
    img: 'assets/img/productos/estudiantes/colores.png',
    precio: '$5.50'
    },
    {
    nombre: 'Cuadernos',
    descripcion: 'Cuadernos espiral ',
    img: 'assets/img/productos/estudiantes/cuadernos.png',
    precio: '$1.00'
    },
    {
      nombre: 'compas',
      descripcion: 'Compas estudiantil ',
      img: 'assets/img/productos/estudiantes/compas.png',
      precio: '$1.50'
      },
      {
        nombre: 'Estuche de Geometria',
        descripcion: 'Estuche 20cm ',
        img: 'assets/img/productos/estudiantes/geometria.png',
        precio: '$1.00'
        },
    
 ];

 getEstudiantil(){
  return this.estudiantil;
}

  constructor() { }
}
