import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { NotesRepositoryComponent } from './components/notes-repository/notes-repository.component';
import { MelodyControlComponent } from './components/melody-control/melody-control.component';
import { AssemblerCodeComponent } from './components/assembler-code/assembler-code.component';
import { MainComponent } from './components/main/main.component';
import { OctaveComponent } from './components/octave/octave.component';


@NgModule({
  declarations: [
    NotesRepositoryComponent,
    MelodyControlComponent,
    AssemblerCodeComponent,
    MainComponent,
    OctaveComponent
  ],
  imports: [
    CommonModule,
    MainPanelRoutingModule
  ]
})
export class MainPanelModule { }
