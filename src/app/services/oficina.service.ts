import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  private oficina: any[] = [
    { nombre: 'clip',
    descripcion: 'clip jumbo',
    img: 'assets/img/productos/oficina/clip.png',
    precio: '$5.50'
    },
    {
    nombre: 'engrapadora',
    descripcion: 'engrapadora 30/40 pag.',
    img: 'assets/img/productos/oficina/engrapadora.png',
    precio: '$5.00'
    },
 ];

 getOficina(){
  return this.oficina;
}

  constructor() { }
}
