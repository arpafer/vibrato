import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import Note from 'src/app/models/Dtos/note';
import { VoiceService } from '../../services/voice.service';
import { Observable, Subscription } from 'rxjs';
import { NotesInVoice } from 'src/app/models/Dtos/notes-in-voice';
import Octaves from 'src/app/models/msxsound/Octaves';
import NotePlay from '../../../../models/Dtos/note-play';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit, OnChanges {

  @Input() voice: string = "";
  @Input() noteAdded: Note = {name: "", octave: 0, frequency: 0};
  @Input() activated: boolean = false;
  @Input() globalPlay: boolean = false;
  @Output() noteRemoved = new EventEmitter<Note>();
 
  private notes$ = new Observable<NotesInVoice>();
  private notesSubscription = new Subscription();
  public notes: Note[] = [];
  public frequencies: number[] = [];
  public loading: boolean = false;
  public volume: number = 10;

  constructor(private voiceService: VoiceService, private noteService: NoteService) { }

  ngOnInit(): void {

     this.notes$ = this.voiceService.getNotes$();
     this.noteAddedObserver();
  }

  private noteAddedObserver() {
    this.notes$.subscribe(
      (_notes) => {
        let _arrNotes: Note[] = [];
        this.loading = true;
         if (_notes.voice == parseInt(this.voice)) {
          this.notes = [];
           _notes.notes.forEach(
            (note) => {
              _arrNotes.push(note);
            }
           );
           this.getInfoNoteAdded(_notes.notes[_notes.notes.length - 1]);
           this.notes = _arrNotes;
         }
         this.loading = false;
      }
    )
  }

  private getInfoNoteAdded(note: Note) {
    let octave = Octaves.octaves[this.noteAdded.octave - 1];
    console.log(octave);
    console.log(note.name);
    this.frequencies.push(octave.notas.arrayNotes.get(note.name) as number);
  }

  clickedNote(note: NotePlay) {
    console.log(note);
    this.noteService.play(parseInt(this.voice), [note]);
  }

  erasedNote(note: NotePlay, index: number) {
    this.voiceService.removeNote(note, parseInt(this.voice), index);
    // this.frequencies.splice(MapNotesNameToIndex.)
  }

  changedTime(note: NotePlay, index: number) {
    this.voiceService.updateNote(note, parseInt(this.voice), index);
  }

  play() {
    this.voiceService.play(parseInt(this.voice));
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log("OnChanges - Voz " + this.voice + " - Note " + this.noteAdded.name + " - octava " + this.noteAdded.octave);
     // console.log(changes);
     const _noteAdded = changes["noteAdded"];
      if (this.activated && _noteAdded != null) {       
        if (_noteAdded.currentValue != _noteAdded.previousValue) {
           this.voiceService.addNote(this.noteAdded, parseInt(this.voice), this.volume);
        } 
      }
      const _globalPlay = changes["globalPlay"];
      if (_globalPlay != null && _globalPlay.currentValue != _globalPlay.previousValue) {
        if (_globalPlay.currentValue == true)
           this.voiceService.play(parseInt(this.voice));
        else 
           this.voiceService.stop(parseInt(this.voice));
      }
  }

  toggleCheck() {
    this.activated = !this.activated;
    // console.log("Voz " + this.voice + ": " + this.activated);
  }
}
