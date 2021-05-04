import { ESTUDANTES } from './../mock-students';
import { Component, OnInit } from '@angular/core';
import { Estudante } from './../estudante';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  listaEstudantes = ESTUDANTES;

  constructor() { }

  ngOnInit(): void {
  }

  selectedStudent?: Estudante;
  onSelect(estudante: Estudante): void {
    this.selectedStudent = estudante ;
  }

}
