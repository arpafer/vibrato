import { Injectable } from '@angular/core';
import NotePlay from 'src/app/models/Dtos/note-play';
import { Frecuency } from 'src/app/models/msxsound/Frecuency';
import SoundChip from 'src/app/models/msxsound/SoundChip';
import { VoiceService } from './voice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // private playedNote$ = new Subject<NoteInVoice>();
  private sound = new SoundChip();

  constructor() { }

  playAll(notes1: NotePlay[], notes2: NotePlay[], notes3: NotePlay[]) {
    this.sound = new SoundChip();
     this._play(1, notes1);
     this._play(2, notes2);
     this._play(3, notes3);
     this.sound.play();
  }

  play(voice: number, notes: NotePlay[]): void {
    this.sound = new SoundChip();
    this._play(voice, notes);
    this.sound.play();
  }

  private _play(voice: number, notes: NotePlay[]): void {

    //console.log(note);   
    this.sound.getObserverPlayedNoteVoice$(voice).subscribe(
      (freq: Frecuency) => {
         // NoteInVoice  --> Hay que meter este nuevo Interface, que es lo que se va a devolver al observador.
      }
    );
    let frecuencias: number[] = [];
    notes.forEach(
      (note) => {
        frecuencias.push(note.frequency, note.time);
    //    console.log("note name: " + note.name + " frecuencia: " + note.frequency + " time: " + note.time);
      }
    )
    this.sound.setVoiceFrequencies(voice, frecuencias);    
  }

}
