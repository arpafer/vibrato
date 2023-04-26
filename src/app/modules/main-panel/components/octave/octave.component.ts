import { Component, OnInit, Input } from '@angular/core';
import { Octave, Octaves } from 'src/app/models/msxsound/Octaves';

@Component({
  selector: 'app-octave',
  templateUrl: './octave.component.html',
  styleUrls: ['./octave.component.scss']
})
export class OctaveComponent implements OnInit {

  @Input() octaveIndex: number = 1;
  public octave: Octave;
  public notesName: string[] = [];
  public notesFrequencies: number[] = [];

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

}
