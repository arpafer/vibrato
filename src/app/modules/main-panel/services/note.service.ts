import { Injectable } from '@angular/core';
import NotePlay from 'src/app/models/Dtos/note-play';
import { Frecuency } from 'src/app/models/msxsound/Frecuency';
import SoundChip from 'src/app/models/msxsound/SoundChip';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // private playedNote$ = new Subject<NoteInVoice>();

  constructor() { }

  play(voice: number, note: NotePlay): void {

    //console.log(note);
    let sound = new SoundChip();
    sound.getObserverPlayedNoteVoice$(voice).subscribe(
      (freq: Frecuency) => {
         // NoteInVoice  --> Hay que meter este nuevo Interface, que es lo que se va a devolver al observador.
      }
    );
    sound.setVoiceFrequencies(voice, [note.frequency, note.time]);
    sound.play();
  }

}
