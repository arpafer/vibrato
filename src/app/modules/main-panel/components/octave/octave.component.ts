import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Octave, Octaves } from 'src/app/models/msxsound/Octaves';
import { OctaveService } from '../../services/octave.service';
import { NoteService } from '../../services/note.service';
import { Frecuency } from 'src/app/models/msxsound/Frecuency';

@Component({
  selector: 'app-octave',
  templateUrl: './octave.component.html',
  styleUrls: ['./octave.component.scss']
})
export class OctaveComponent implements OnInit {

  @Input() octaveIndex: number = 1;
  @Output() selectedNote = new EventEmitter<string>();
  public octave: Octave;
  public notesName: string[] = [];
  public notesFrequencies: number[] = [];
  public coloresNotas: string[] = [
    "#EEEEEE", "#FFA500", "#FFD700", "#9ACD32", "#008000", "#1E90FF", "#4B0082", "#DA70D6"
  ];
  private freqToPlay: Frecuency = new Frecuency(0, 0);
  private noteToPlay: string = "";
  
  constructor(private octaveService: OctaveService, private noteService: NoteService) {
     this.octave =  Octaves.octaves[this.octaveIndex - 1];
  }

  ngOnInit(): void {    
      this.octave = Octaves.octaves[this.octaveIndex - 1];
      let i = 0;
      for (let notaName of this.octave.notas.arrayNotes.keys()) {
        this.notesName.push(notaName);
        this.notesFrequencies.push(this.octave.notas.arrayNotes.get(notaName) as number);
      }
  }

  eventSelectedNote(nota: string) {
     let frequency = this.octave.notas.arrayNotes.get(nota) as number
     this.octaveService.register(this.octaveIndex, nota, frequency);
  }

  playNote(noteName: string): void {
     this.octave = Octaves.octaves[this.octaveIndex - 1];
     let frequency = this.octave.notas.arrayNotes.get(noteName) as number;
     this.noteService.play(1, [{ name: noteName, time: 0.25, frequency: frequency, octave: 0 }]);
  }
}
