import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'estudantes', component: EstudantesComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:RA', component: EstudanteDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
