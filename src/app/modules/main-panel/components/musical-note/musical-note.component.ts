import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Frecuency } from 'src/app/models/msxsound/Frecuency';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-musical-note',
  templateUrl: './musical-note.component.html',
  styleUrls: ['./musical-note.component.scss']
})
export class MusicalNoteComponent implements OnInit, OnDestroy {

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
  public sizeClass = "size-note";
  private notePlayed$ = new Subscription();
  private notePlaying$ = new Subscription();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.observerNotePlaying();
    this.observerNotePlayed();
    this.btnWidth = "" + this.width;
    if (!this.disabledClick) {
      this.pointer = "pointer";
    } else {
      this.pointer = "no-pointer";
    }
  }

  private observerNotePlaying() {
    this.notePlaying$ = this.noteService.getNotePlaying$().subscribe(
       (freq: Frecuency) => {
        if (freq.isEqualTo(new Frecuency(this.noteFrequency, this.minTime))) {
          console.log("NOTA SONANDO...")
          this.sizeClass = "size-note-playing";
          this.fontSize = "1.1em";
         }
       }
     )
  }

  private observerNotePlayed() {
    this.notePlayed$ = this.noteService.getNotePlayed$().subscribe(
       (freq: Frecuency) => {       
         if (freq.isEqualTo(new Frecuency(this.noteFrequency, this.minTime))) {
          console.log("NOTA TOCADA")
          this.sizeClass = "size-note";
          this.fontSize = "small";
         }
       }
     )
  }

  translateSoundTimeToNoteWidth(soundTime: number) {
     return (soundTime * this.minWidth) / this.minTime;
  }

  clickNote() {    
    this.clickedNote.emit(this.noteName);
  }

  playNote() {

  }

  ngOnDestroy(): void {
    this.notePlayed$.unsubscribe();
    this.notePlaying$.unsubscribe();
  }
}
