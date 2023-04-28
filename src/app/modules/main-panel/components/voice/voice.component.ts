import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import Note from 'src/app/models/Dtos/note';
import { VoiceService } from '../../services/voice.service';
import { Observable } from 'rxjs';
import { NotesInVoice } from 'src/app/models/Dtos/notes-in-voice';
import Octaves from 'src/app/models/msxsound/Octaves';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit, OnChanges {

  @Input() voice: string = "";
  @Input() noteAdded: Note = {name: "", octave: 0};
  @Output() noteRemoved = new EventEmitter<Note>();
  @Input() activated: boolean = false;

  private notes$ = new Observable<NotesInVoice>();
  public notes: Note[] = [];
  public frequencies: number[] = [];
 
  constructor(private voiceService: VoiceService) { }

  ngOnInit(): void {

     this.notes$ = this.voiceService.getNotes$();
     this.noteAddedObserver();
  }

  private noteAddedObserver() {
    this.notes$.subscribe(
      (_notes) => {
         if (_notes.voice == parseInt(this.voice)) {
          this.notes = [];
           _notes.notes.forEach(
            (note) => {
              this.notes.push(note);
              this.getInfoNoteAdded();
            }
           )
         }
      }
    )
  }

  private getInfoNoteAdded() {
    let octave = Octaves.octaves[this.noteAdded.octave - 1];
    let i = 0;
    for (let notaName of octave.notas.arrayNotes.keys()) {
      this.frequencies.push(octave.notas.arrayNotes.get(notaName) as number);
      i++;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log("OnChanges - Voz " + this.voice + " - Note " + this.noteAdded.name + " - octava " + this.noteAdded.octave);
      console.log(changes);
      if (this.activated) {
        this.voiceService.addNote(this.noteAdded, parseInt(this.voice));
      }
  }

  toggleCheck() {
    this.activated = !this.activated;
    console.log("Voz " + this.voice + ": " + this.activated);
  }
}
