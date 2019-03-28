import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PapeleriaService {
  private papeleria: any[] = [
    { nombre: 'Folder ',
    descripcion: 'folder corriente',
    img: 'assets/img/productos/papeleria/Folder.png',
    precio: '$0.10'
    },
    {
    nombre: 'Cuadriculas',
    descripcion: 'papel tamaño oficio a cuadros ',
    img: 'assets/img/productos/papeleria/cuadriculas.jpg',
    precio: '$0.20'
    },
 ];

 getPapeleria(){
  return this.papeleria;
}
  constructor() { }
}
