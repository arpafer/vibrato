import { Injectable, Input } from '@angular/core';
import Note from 'src/app/models/Dtos/note';
import { Subject, Observable } from 'rxjs';
import { NotesInVoice } from 'src/app/models/Dtos/notes-in-voice';
import NotePlay from 'src/app/models/Dtos/note-play';
import MapNotesNameToIndex from 'src/app/models/msxsound/map-notes-name-to-index';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  private mapNotesPerVoice: Map<number, Note[]> = new Map<number, Note[]>();
  private voice$ = new Subject<NotesInVoice>();
  private notePlaying$ = new Subject<NotePlay>();

  constructor() {

  }

  addNote(note: Note, voice: number, volume: number) {
    let notesVoice: Note[] = this.mapNotesPerVoice.get(voice)?? [];
    notesVoice.push(note);
    this.mapNotesPerVoice.set(voice, notesVoice);
    this.voice$.next({notes: notesVoice, voice: voice, volume});
  }

  getNotes$(): Observable<NotesInVoice> {
     return this.voice$.asObservable();
  }

  removeNote(note: NotePlay, voice: number, indexPosition: number): void {
    let notesVoice: Note[] = this.mapNotesPerVoice.get(voice)?? [];
    if (notesVoice.length > 0) {
      let encontrado = false;
      let i = 0;
      notesVoice.forEach(
        (_note) => {
           if (_note.name == note.noteName && _note.frequency == note.frequency && i == indexPosition && !encontrado) {
            notesVoice.splice(indexPosition, 1);
            encontrado = true;
            this.voice$.next({notes: notesVoice, voice: voice, volume: 0});
           }
           i++;
           if (encontrado) return;
        }
      );
    }
  }

  play(): void {

  }

  stop(): void {

  }

  pause(): void {

  }
}
