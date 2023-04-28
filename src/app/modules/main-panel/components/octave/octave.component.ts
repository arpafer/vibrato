import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Octave, Octaves } from 'src/app/models/msxsound/Octaves';

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
    "#FFA500", "#FFD700", "#9ACD32", "#008000", "#1E90FF", "#4B0082", "#DA70D6"
  ];

  constructor() {
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

  eventSelectedNote(nota: string, octaveIndex: number) {
     console.log("octava " + octaveIndex + " nota: " + nota);
  }

}
