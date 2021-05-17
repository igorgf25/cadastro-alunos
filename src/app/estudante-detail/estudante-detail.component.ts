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
    const RA = Number(this.route.snapshot.paramMap.get('RA'));
    this.estudanteService.getEstudante(RA)
      .subscribe(estudante => this.estudante = estudante);
  }

  goBack(): void {
    this.location.back();
  }

}
