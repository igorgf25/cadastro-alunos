import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location) { }

  estudante : Estudante;

  ngOnInit(): void {
    this.getEstudante();
  }

  getEstudante(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudanteService.getEstudante(id)
      .subscribe(estudante => this.estudante = estudante);
  }

  save(): void {
    if (this.estudante) {
      this.estudanteService.updateEstudante(this.estudante)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
