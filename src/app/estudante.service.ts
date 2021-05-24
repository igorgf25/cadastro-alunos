import { MessageService } from './message.service';
import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {


  constructor(private http: HttpClient, private messageService: MessageService) { }

  private studentsUrl = 'http://localhost:3000/students';

  getStudents(): Observable <Estudante[]>
  {
    return this.http.get<Estudante[]>(this.studentsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Estudante[]>('getStudents', []))
    );
  }

  getEstudante(id: number): Observable<Estudante> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Estudante>(url).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Estudante>(`getStudent id=${id}`))
    );
  }

  updateEstudante(estudante: Estudante): Observable<any> {
    const url = `${this.studentsUrl}/${estudante.id}`;
    return this.http.put(url, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`updated Student id=${estudante.id}`)),
      catchError(this.handleError<any>('updateEstudante'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addStudent(estudante: Estudante): Observable<Estudante> {
    return this.http.post<Estudante>(this.studentsUrl, estudante, this.httpOptions).pipe(
      tap((newStudent: Estudante) => this.log(`estudante adicionado w/ id=${newStudent.id}`)),
      catchError(this.handleError<Estudante>('addStudent'))
    );
  }

  deleteStudent(id: number): Observable<Estudante> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<Estudante>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Estudante>('deleteHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`EstudanteService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  

}
