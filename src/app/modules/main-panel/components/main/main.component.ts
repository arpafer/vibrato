import { Component, OnInit } from '@angular/core';
import MusicalNoteFrecuency from 'src/app/models/msxsound/MusicalNoteFrecuency';
import SoundChip from 'src/app/models/msxsound/SoundChip';
import VoiceType from 'src/app/models/msxsound/VoiceType';
import octaves from 'src/app/models/msxsound/octaves';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(octaves);
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
        MusicalNoteFrecuency.Do4, 0.5,
        MusicalNoteFrecuency.Re4, 0.5,
        MusicalNoteFrecuency.Mi4, 0.5,
        MusicalNoteFrecuency.Fa4, 0.5,
        MusicalNoteFrecuency.Sol4, 0.5,
        MusicalNoteFrecuency.La4, 0.5,
        MusicalNoteFrecuency.Si4, 0.5,
        MusicalNoteFrecuency.Do5, 0.5,
        MusicalNoteFrecuency.Re5, 0.5,
        MusicalNoteFrecuency.Mi5, 0.5,
        MusicalNoteFrecuency.Fa5, 0.5,
        MusicalNoteFrecuency.Sol5, 0.5,
        MusicalNoteFrecuency.La5, 0.5,
        MusicalNoteFrecuency.Si5, 0.5,
        MusicalNoteFrecuency.Do6, 0.5,
        MusicalNoteFrecuency.Re6, 0.5,
        MusicalNoteFrecuency.Mi6, 0.5,
        MusicalNoteFrecuency.Fa6, 0.5,
        MusicalNoteFrecuency.Sol6, 0.5,
        MusicalNoteFrecuency.La6, 0.5,
        MusicalNoteFrecuency.Si6, 0.5,
        MusicalNoteFrecuency.Do7, 0.5,
        MusicalNoteFrecuency.Re7, 0.5,
        MusicalNoteFrecuency.Mi7, 0.5,
        MusicalNoteFrecuency.Fa7, 0.5,
        MusicalNoteFrecuency.Sol7, 0.5,
        MusicalNoteFrecuency.La7, 0.5,
        MusicalNoteFrecuency.Si7, 0.5,
        MusicalNoteFrecuency.Do8, 0.5,
        MusicalNoteFrecuency.Re8, 0.5,
        MusicalNoteFrecuency.Mi8, 0.5,
        MusicalNoteFrecuency.Fa8, 0.5,
        MusicalNoteFrecuency.Sol8, 0.5,
        MusicalNoteFrecuency.La8, 0.5,
        MusicalNoteFrecuency.Si8, 0.5
      ];

      sound.setVoiceFrequencies(1, voz1);
      sound.setVoiceType(1, VoiceType.TRIANGLE);
     // sound.play();
  }

}
