import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { GruposComponent } from './grupos/grupos.component';
import { SemestresComponent } from './semestres/semestres.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DocentesComponent,
    GruposComponent,
    SemestresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
