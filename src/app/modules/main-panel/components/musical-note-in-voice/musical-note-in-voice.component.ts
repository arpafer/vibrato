import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() selectedNote = new EventEmitter<string>();

  btnWidth: string = "";
  private minWidth:number = 47;
  public minTime: number = 0.1;

  constructor() { }

  ngOnInit(): void {
    this.btnWidth = "" + this.width;
  }

}
