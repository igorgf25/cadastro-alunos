import { Component, OnInit } from '@angular/core';
import { Estudante } from './../estudante';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante: Estudante = {
    RA: 0,
    name: 'Igor Guilherme',
    age: 20,
    course:'Análise e Desenvolvimento de Sistemas',
    institution:'Fatec Itu'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
