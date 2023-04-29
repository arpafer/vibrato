import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import NotePlay from 'src/app/models/Dtos/note-play';

@Component({
  selector: 'app-musical-note-in-voice',
  templateUrl: './musical-note-in-voice.component.html',
  styleUrls: ['./musical-note-in-voice.component.scss']
})
export class MusicalNoteInVoiceComponent implements OnInit {

  @Input() noteName: string = "";
  @Input() noteFrequency: number = 0;
  @Input() color: string = "primary";
  @Input() width: number = 50;
  @Input() fontSize: string = "small";
  @Input() resaltado: boolean = false;
  @Input() timeButton: boolean = false;
  @Input() disabledClick: boolean = false;
  @Output() clickedNote = new EventEmitter<NotePlay>();
  @Output() erasedNote = new EventEmitter<NotePlay>();

  btnWidth: string = "";
  private minWidth:number = 47;
  public minTime: number = 0.5;
  public pointer: string = "pointer";

  constructor() { }

  ngOnInit(): void {
    this.btnWidth = "" + this.width;
  }

  clickMinusTime() {
     if (this.minTime >= 0.1) {
       this.minTime -= 0.1;
       this.minTime = Number(this.minTime.toFixed(1));
     }
     console.log("Volume: ", this.minTime, " Nota: ", this.noteName, " Frecuencia: " + this.noteFrequency);
  }

  clickPlusTime() {
     this.minTime += 0.1;
     this.minTime = Number(this.minTime.toFixed(2));
     console.log("Volume: ", this.minTime, " Nota: ", this.noteName, " Frecuencia: ", this.noteFrequency);
  }

  _clickedNote() {
     this.clickedNote.emit({noteName: this.noteName, time: this.minTime, frequency: this.noteFrequency});
  }

  deleteNote() {
     this.erasedNote.emit({noteName: this.noteName, time: this.minTime, frequency: this.noteFrequency});
  }
}
