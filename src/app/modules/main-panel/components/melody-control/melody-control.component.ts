import { Component, OnInit } from '@angular/core';
import { OctaveService } from '../../services/octave.service';
import { Observable } from 'rxjs';
import Note from 'src/app/models/Dtos/note';
import { NoteService } from '../../services/note.service';
import { VoiceService } from '../../services/voice.service';

@Component({
  selector: 'app-melody-control',
  templateUrl: './melody-control.component.html',
  styleUrls: ['./melody-control.component.scss']
})
export class MelodyControlComponent implements OnInit {

  private noteObservable$ = new Observable<Note>();
  public note: Note = { name: "", octave: 0, frequency: 0};
  public playing: boolean = false;

  constructor(private octaveService: OctaveService, private noteService: NoteService, private voiceService: VoiceService) { }

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
   // this.playing = !this.playing;
    this.noteService.playAll(this.voiceService.getNotesPerVoice(1), 
          this.voiceService.getNotesPerVoice(2), 
          this.voiceService.getNotesPerVoice(3));
  }
}
