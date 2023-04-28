import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Observable } from 'rxjs';
import Note from 'src/app/models/Dtos/note';

@Component({
  selector: 'app-melody-control',
  templateUrl: './melody-control.component.html',
  styleUrls: ['./melody-control.component.scss']
})
export class MelodyControlComponent implements OnInit {

  private noteObservable$ = new Observable<Note>();
  public note: Note = { name: "", octave: 0};

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
      this.noteObservable$ = this.noteService.getNoteObserver();
      this.observerSelectedNote();
  }

  observerSelectedNote() {
    this.noteObservable$.subscribe(
      (note: Note) => {
        this.note = note;
        console.log("Melody control --> octava " + note.octave + " - nota " + note.name);
      }
    )
  }
}
