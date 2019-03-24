import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
 
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor( private productosService: ProductosService) { }
  productos: any[] = [];

  ngOnInit() {
    this.productos = this.productosService.getProductos();
    console.log(this.productos);
  }

}
