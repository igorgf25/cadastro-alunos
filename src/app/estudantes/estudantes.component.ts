import { MessageService } from './../message.service';
import { MessagesComponent } from './../messages/messages.component';
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

  constructor(private estudanteService : EstudanteService, private messageService : MessageService ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  selectedStudent?: Estudante;
  onSelect(estudante: Estudante): void {
    this.selectedStudent = estudante ;
    this.messageService.add('MessagesService: Selected student RA=${estudante.RA}'); 
  }

}
