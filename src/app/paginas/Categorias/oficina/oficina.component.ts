import { Component, OnInit } from '@angular/core';
import {OficinaService} from 'src/app/services/oficina.service';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.css']
})
export class OficinaComponent implements OnInit {

  constructor( private oficinaService: OficinaService) { }
  oficina: any []=[];

  ngOnInit() {
    this.oficina = this.oficinaService.getOficina();
    console.log(this.oficina);
  }


}
