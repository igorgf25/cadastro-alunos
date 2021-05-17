import { MessageService } from './message.service';
import { ESTUDANTES } from './mock-students';
import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {


  constructor(private messageService: MessageService) { }

  getStudents(): Observable <Estudante[]>
  {
    const estudantes = of (ESTUDANTES);
    this.messageService.add('EstudanteService: fetched estudantes');
    return estudantes;
  }

  getEstudante(RA: number): Observable <Estudante>
  {
    const estudante = ESTUDANTES.find(h => h.RA === RA) as Estudante;
    this.messageService.add(`EstudanteService: fetched student RA= ${RA}`);
    return of(estudante);
  }
}
