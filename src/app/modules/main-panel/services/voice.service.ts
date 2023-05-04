import { Injectable, Input } from '@angular/core';
import Note from 'src/app/models/Dtos/note';
import { Subject, Observable } from 'rxjs';
import { NotesInVoice } from 'src/app/models/Dtos/notes-in-voice';
import NotePlay from 'src/app/models/Dtos/note-play';
import MapNotesNameToIndex from 'src/app/models/msxsound/map-notes-name-to-index';
import { NoteService } from './note.service';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  private mapNotesPerVoice: Map<number, NotePlay[]> = new Map<number, NotePlay[]>();
  private voice$ = new Subject<NotesInVoice>();
  private notePlaying$ = new Subject<NotePlay>();

  constructor(private noteService: NoteService) {

  }

  addNote(note: Note, voice: number, volume: number) {
    let notesVoice: NotePlay[] = this.mapNotesPerVoice.get(voice)?? [];
    notesVoice.push({ name: note.name, frequency: note.frequency, octave: note.octave, time: 0.5});
    this.mapNotesPerVoice.set(voice, notesVoice);
    this.voice$.next({notes: notesVoice, voice: voice, volume});
  }

  updateNote(note: NotePlay, voice: number, index: number) {
    let notesVoice: NotePlay[] = this.mapNotesPerVoice.get(voice)?? [];
    if (notesVoice.length > 0) {
      let encontrado = false;
      let i = 0;
      notesVoice.forEach(
        (_note) => {
           if (_note.name == note.name && _note.frequency == note.frequency && i == index && !encontrado) {
              notesVoice[i] = note;
              encontrado = true;
              this.mapNotesPerVoice.set(voice, notesVoice);
           }
           i++;
           if (encontrado) return;
          }
      );
    }
  }

  getNotes$(): Observable<NotesInVoice> {
     return this.voice$.asObservable();
  }

  removeNote(note: NotePlay, voice: number, indexPosition: number): void {
    let notesVoice: NotePlay[] = this.mapNotesPerVoice.get(voice)?? [];
    if (notesVoice.length > 0) {
      let encontrado = false;
      let i = 0;
      notesVoice.forEach(
        (_note) => {
           if (_note.name == note.name && _note.frequency == note.frequency && i == indexPosition && !encontrado) {
            notesVoice.splice(indexPosition, 1);
            encontrado = true;
            this.mapNotesPerVoice.set(voice, notesVoice);
            this.voice$.next({notes: notesVoice, voice: voice, volume: 0});
           }
           i++;
           if (encontrado) return;
        }
      );
    }
  }

  play(voice: number): void {
    let notesVoice: NotePlay[] = this.mapNotesPerVoice.get(voice)?? [];
    if (notesVoice.length > 0) {
      let lstNotes: NotePlay[] = [];
      notesVoice.forEach(
        (note: NotePlay) => {
          lstNotes.push({ name: note.name, time: note.time, frequency: note.frequency, octave: note.octave});
        }
      );
      this.noteService.play(voice, lstNotes)
    }
  }

  stop(): void {

  }

  pause(): void {

  }
}
