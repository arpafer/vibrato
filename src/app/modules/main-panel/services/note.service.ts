import { Injectable } from '@angular/core';
import Note from '../../../models/Dtos/note';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteObserver$ = new Subject<Note>();

  constructor() { }

  getNoteObserver(): Observable<Note> {
     return this.noteObserver$.asObservable();
  }

  register(octaveIndex: number, nota: string) {
      this.noteObserver$.next({name: nota, octave: octaveIndex});
  }
}
