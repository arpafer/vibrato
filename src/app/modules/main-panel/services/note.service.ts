import { Injectable } from '@angular/core';
import NotePlay from 'src/app/models/Dtos/note-play';
import SoundChip from 'src/app/models/msxsound/SoundChip';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  play(voice: number, note: NotePlay): void {

    console.log(note);
    let sound = new SoundChip();
    sound.setVoiceFrequencies(voice, [note.frequency, note.time]);
    sound.play();
  }
}
