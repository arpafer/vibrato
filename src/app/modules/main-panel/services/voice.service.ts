import { Injectable, Input } from '@angular/core';
import Note from 'src/app/models/Dtos/note';
import { Subject, Observable } from 'rxjs';
import { NotesInVoice } from 'src/app/models/Dtos/notes-in-voice';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  private mapNotesPerVoice: Map<number, Note[]> = new Map<number, Note[]>();
  private voice$ = new Subject<NotesInVoice>();

  constructor() { }

  addNote(note: Note, voice: number) {
    let notesVoice: Note[] = this.mapNotesPerVoice.get(voice)?? [];
    notesVoice.push(note);
    this.mapNotesPerVoice.set(voice, notesVoice);
    this.voice$.next({notes: notesVoice, voice: voice});
  }

  getNotes$(): Observable<NotesInVoice> {
     return this.voice$.asObservable();
  }

  removeNote(noteIndex: number, voice: number) {
    let notesVoice: Note[] = this.mapNotesPerVoice.get(voice)?? [];
    if (notesVoice.length > 0) {
       notesVoice.splice(noteIndex, 1);
       this.voice$.next({notes: notesVoice, voice: voice});
    }
  }
}
