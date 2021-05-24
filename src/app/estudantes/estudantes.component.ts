import { MessageService } from './../message.service';
import { EstudanteService } from './../estudante.service';
import { Component, OnInit } from '@angular/core';
import { Estudante } from './../estudante';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  listaEstudantes : Estudante[] = [];

  getStudents() : void
  {
    this.estudanteService.getStudents().subscribe(estudantes => this.listaEstudantes = estudantes);
  }

  add(idString: string, name: string, ageString: string, course: string, institution: string): void {

    idString = idString.trim();
    name = name.trim();
    ageString = ageString.trim();
    course = course.trim();
    institution = institution.trim();

    var id = Number(idString);
    var age = Number(idString);

    if (!name) { return; }
    this.estudanteService.addStudent({id, name, age, course, institution } as Estudante)
      .subscribe(hero => {
        this.listaEstudantes.push(hero);
      });
  }

  delete(estudante: Estudante): void {
    this.listaEstudantes = this.listaEstudantes.filter(h => h !== estudante);
    this.estudanteService.deleteStudent(estudante.id).subscribe();
  }

  constructor(private estudanteService : EstudanteService, private messageService : MessageService ) {}

  ngOnInit(): void {
    this.getStudents();
  }

}
