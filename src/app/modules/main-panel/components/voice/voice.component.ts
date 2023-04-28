import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  @Input() voz: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
