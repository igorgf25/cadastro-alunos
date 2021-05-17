import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudanteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }