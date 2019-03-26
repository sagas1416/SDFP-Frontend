import { Component, OnInit } from '@angular/core';
import {EstudiantilService} from 'src/app/services/estudiantil.service';

@Component({
  selector: 'app-estudiantil',
  templateUrl: './estudiantil.component.html',
  styleUrls: ['./estudiantil.component.css']
})
export class EstudiantilComponent implements OnInit {

  constructor( private estudiantilService: EstudiantilService) { }
  estudiantil: any[] = [];

  ngOnInit() {
    this.estudiantil = this.estudiantilService.getEstudiantil();
    console.log(this.estudiantil);
  }

}
