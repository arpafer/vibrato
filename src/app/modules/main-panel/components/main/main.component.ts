import { Component, OnInit } from '@angular/core';
import MusicalNoteFrecuency from 'src/app/models/msxsound/MusicalNoteFrecuency';
import SoundChip from 'src/app/models/msxsound/SoundChip';
import VoiceType from 'src/app/models/msxsound/VoiceType';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sound = new SoundChip();

    const voz1 =
    [
        MusicalNoteFrecuency.Do1, 0.5,
        MusicalNoteFrecuency.Re1, 0.5,
        MusicalNoteFrecuency.Mi1, 0.5,
        MusicalNoteFrecuency.Fa1, 0.5,
        MusicalNoteFrecuency.Sol1, 0.5,
        MusicalNoteFrecuency.La1, 0.5,
        MusicalNoteFrecuency.Si1, 0.5,
        MusicalNoteFrecuency.Do2, 0.5,
        MusicalNoteFrecuency.Re2, 0.5,
        MusicalNoteFrecuency.Mi2, 0.5,
        MusicalNoteFrecuency.Fa2, 0.5,
        MusicalNoteFrecuency.Sol2, 0.5,
        MusicalNoteFrecuency.La2, 0.5,
        MusicalNoteFrecuency.Si2, 0.5,
        MusicalNoteFrecuency.Do3, 0.5,
        MusicalNoteFrecuency.Re3, 0.5,
        MusicalNoteFrecuency.Mi3, 0.5,
        MusicalNoteFrecuency.Fa3, 0.5,
        MusicalNoteFrecuency.Sol3, 0.5,
        MusicalNoteFrecuency.La3, 0.5,
        MusicalNoteFrecuency.Si3, 0.5,
        MusicalNoteFrecuency.Do4, 0.5
      ];

      sound.setVoiceFrequencies(1, voz1);
      sound.setVoiceType(1, VoiceType.TRIANGLE);
      sound.play();
  }

}
