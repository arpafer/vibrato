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

     // Melodía principal (Voz 1)
     const voice1 = [
      523.25, 1.2, 587.33, 0.4, 659.25, 0.4, 784.00, 1.2, 1046.50, 1.2, 0, 0.2,
      523.25, 1.2, 587.33, 0.4, 659.25, 0.4, 698.46, 1.2, 880.00, 1.2, 0, 0.2,
      698.46, 0.6, 784.00, 0.6, 880.00, 0.6, 1046.50, 0.6, 1174.66, 0.6, 1318.51, 0.6,
      1046.50, 1.2, 0, 0.2, 1046.50, 1.2, 1174.66, 0.4, 1318.51, 0.4, 1046.50, 0.4,
      880.00, 1.2, 0, 0.2, 880.00, 1.2, 698.46, 0.4, 784.00, 0.4, 659.25, 0.4,
      587.33, 0.4, 523.25, 0.4, 0, 1.2
    ];

    const voz2 = [
      392.00, 0.4, 392.00, 0.4, 392.00, 0.4, 440.00, 0.4, 392.00, 0.4, 0, 0.4,
      392.00, 0.4, 392.00, 0.4, 392.00, 0.4, 440.00, 0.4, 392.00, 0.4, 0, 0.4,
      440.00, 0.4, 392.00, 0.4, 440.00, 0.4, 494.00, 0.4, 523.25, 0.4, 587.33, 0.4,
      523.25, 0.4, 523.25, 0.4, 587.33, 0.4, 659.25, 0.4, 698.46, 0.4, 784.00, 0.4,
      698.46, 0.4, 698.46, 0.4, 784.00, 0.4, 880.00, 0.4, 1046.50, 0.4, 1174.66, 0.4,
      1046.50, 0.4, 1046.50, 0.4, 1174.66, 0.4, 1318.51, 0.4];

    /*  # Acompañamiento 1 (Voz 2)
      acompanamiento1 = [0, 0.5, 523.25, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 587.33, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 392, 0.5, 0, 0.5, 392, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 493.88, 0.5, 0, 0.5, 523.25, 0.5, 0, 1.5]

      # Acompañamiento 2 (Voz 3)
      acompanamiento2 = [0, 0.5, 523.25, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 587.33, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 523.25, 0.5, 0, 0.5, 392, 0.5, 0, 0.5, 392, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 440, 0.5, 0, 0.5, 493.88, 0.5, 0, 0.5, 523.25, 0.5, 0, 1.5]
*/
      sound.setVoiceFrequencies(1, voice1)
      sound.setVoiceFrequencies(2, voz2);
      sound.setVoiceType(1, VoiceType.TRIANGLE);
      // sound.play();
  }

}
