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
  @Input() noteAdded: Note = { name: "", octave: 0, frequency: 0 };
  @Input() activated: boolean = false;
  @Output() noteRemoved = new EventEmitter<Note>();

  private notes$ = new Observable<NotesInVoice>();
  private notesSubscription = new Subscription();
  public notes: NotePlay[] = [];
  public frequencies: number[] = [];
  public loading: boolean = false;
  public volume: number = 15;

  constructor(private voiceService: VoiceService, private noteService: NoteService) { }

  ngOnInit(): void {

    this.notes$ = this.voiceService.getNotes$();
    this.noteAddedObserver();
  }

  private noteAddedObserver() {
    this.notes$.subscribe(
      (_notes) => {
        this.loadNotas(_notes);
        this.loading = false;
        console.log(this.notes);
      }
    )
  }

  private loadNotas(_notes: NotesInVoice) {
    let _arrNotes: NotePlay[] = [];
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
  }

  private getInfoNoteAdded(note: Note) {
    let octave = Octaves.octaves[this.noteAdded.octave - 1];
    this.frequencies.push(octave.notas.arrayNotes.get(note.name) as number);
  }

  clickedNote(note: NotePlay) {
    this.noteService.play(parseInt(this.voice), [note]);
  }

  erasedNote(note: NotePlay, index: number) {
    this.voiceService.removeNote(note, parseInt(this.voice), index);
    // this.frequencies.splice(MapNotesNameToIndex.)
  }

  changedTime(note: NotePlay, index: number) {
    this.notes[index].time = note.time;
    this.voiceService.updateNote(note, parseInt(this.voice), index);
  }

  clickOffsetLeft(index: number) {

  }

  clickOffsetRight(index: number) {

  }

  play() {
    this.voiceService.play(parseInt(this.voice));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("OnChanges - Voz " + this.voice + " - Note " + this.noteAdded.name + " - octava " + this.noteAdded.octave);
    // console.log(changes);
    const _noteAdded = changes["noteAdded"];
    if (this.activated && _noteAdded != null) {
      if (_noteAdded.currentValue != _noteAdded.previousValue && _noteAdded.currentValue.name != "") {
        this.voiceService.addNote(_noteAdded.currentValue, parseInt(this.voice), this.volume);
      }
    }
  }

  toggleCheck() {
    this.activated = !this.activated;
    // console.log("Voz " + this.voice + ": " + this.activated);
  }
}
