import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { NotesRepositoryComponent } from './components/notes-repository/notes-repository.component';
import { MelodyControlComponent } from './components/melody-control/melody-control.component';
import { AssemblerCodeComponent } from './components/assembler-code/assembler-code.component';
import { MainComponent } from './components/main/main.component';
import { OctaveComponent } from './components/octave/octave.component';
import { VoiceComponent } from './components/voice/voice.component';
import { MusicalNoteComponent } from './components/musical-note/musical-note.component';
import { MusicalNoteInVoiceComponent } from './components/musical-note-in-voice/musical-note-in-voice.component';


@NgModule({
  declarations: [
    NotesRepositoryComponent,
    MelodyControlComponent,
    AssemblerCodeComponent,
    MainComponent,
    OctaveComponent,
    VoiceComponent,
    MusicalNoteComponent,
    MusicalNoteInVoiceComponent
  ],
  imports: [
    CommonModule,
    MainPanelRoutingModule
  ]
})
export class MainPanelModule { }
