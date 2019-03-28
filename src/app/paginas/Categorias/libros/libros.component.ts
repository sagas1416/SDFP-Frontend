import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor( private librosService: LibrosService) { }
  libros: any []=[];


  ngOnInit() {
    this.libros = this.librosService.getLibros();
    console.log(this.libros);
  }


}
