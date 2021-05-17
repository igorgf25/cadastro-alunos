import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  estudantes: Estudante[] = [];

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getStudents()
      .subscribe(estudante => this.estudantes = estudante.slice(1, 5));
  }
}