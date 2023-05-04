import { Component, OnInit } from '@angular/core';
import { OctaveService } from '../../services/octave.service';
import { Observable } from 'rxjs';
import Note from 'src/app/models/Dtos/note';

@Component({
  selector: 'app-melody-control',
  templateUrl: './melody-control.component.html',
  styleUrls: ['./melody-control.component.scss']
})
export class MelodyControlComponent implements OnInit {

  private noteObservable$ = new Observable<Note>();
  public note: Note = { name: "", octave: 0, frequency: 0};

  constructor(private octaveService: OctaveService) { }

  ngOnInit(): void {
      this.noteObservable$ = this.octaveService.getNoteObserver();
      this.observerSelectedNote();
  }

  observerSelectedNote() {
    this.noteObservable$.subscribe(
      (note: Note) => {
        this.note = note;
        // console.log("Melody control --> octava " + note.octave + " - nota " + note.name);
      }
    )
  }

  clickPlay() {
    
  }
}
