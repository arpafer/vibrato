import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-musical-note',
  templateUrl: './musical-note.component.html',
  styleUrls: ['./musical-note.component.scss']
})
export class MusicalNoteComponent implements OnInit {

  @Input() noteName: string = "";
  @Input() noteFrequency: number = 0;
  @Input() color: string = "primary";
  @Input() width: number = 47;
  @Input() fontSize: string = "small";
  @Input() resaltado: boolean = false;
  @Input() disabledClick: boolean = false;
  @Output() clickedNote = new EventEmitter<string>();

  btnWidth: string = "";

  private minWidth = 47;
  private minTime = 0.1;
  public pointer = "pointer";

  constructor() { }

  ngOnInit(): void {
    this.btnWidth = "" + this.width;
    if (!this.disabledClick) {
      this.pointer = "pointer";
    } else {
      this.pointer = "no-pointer";
    }
  }

  translateSoundTimeToNoteWidth(soundTime: number) {
     return (soundTime * this.minWidth) / this.minTime;
  }

  clickNote() {
    this.clickedNote.emit(this.noteName);
  }

  playNote() {

  }
}
