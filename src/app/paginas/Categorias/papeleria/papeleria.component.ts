import { Component, OnInit } from '@angular/core';
import { PapeleriaService} from 'src/app/services/papeleria.service';

@Component({
  selector: 'app-papeleria',
  templateUrl: './papeleria.component.html',
  styleUrls: ['./papeleria.component.css']
})
export class PapeleriaComponent implements OnInit {

  constructor( private papeleriaService: PapeleriaService) { }
  papeleria: any[] = [];

  ngOnInit() {
    this.papeleria = this.papeleriaService.getPapeleria();
    console.log(this.papeleria);
  }

}
