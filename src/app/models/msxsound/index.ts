import MusicalNote from "./MusicalNote.js";
import SoundChip from "./SoundChip.js";
import VoiceType from "./VoiceType.js";

let sound = new SoundChip();
/*sound.setVoiceFrequencies(1, [MusicalNote.Do1, 1, MusicalNote.Do2, 1, MusicalNote.Do3, 1, 
         MusicalNote.Do4, 1, MusicalNote.Do5, 1, MusicalNote.Do6, 1,
         MusicalNote.Do7, 1, MusicalNote.Do8, 1]);*/
/*sound.setVoiceFrequencies(1, [MusicalNote.Do4, 1]);
sound.setVoiceFrequencies(2, [329.63 , 1]);
sound.setVoiceFrequencies(3, [392, 1]); */

// Voces para némesis
const voz1 = 
[
    523.25, 0.3, 587.33, 0.3, 659.25, 0.3, 698.46, 0.3, 784.00, 0.3, 880.00, 0.3, 1046.50, 0.3, 1174.66, 0.3,
    1318.51, 0.3, 1396.91, 0.3, 1567.98, 0.3, 1396.91, 0.3, 1318.51, 0.3, 1174.66, 0.3, 1046.50, 0.3, 880.00, 0.3,
    784.00, 0.3, 698.46, 0.3, 659.25, 0.3, 587.33, 0.3, 523.25, 0.3
  ]       

  sound.setVoiceFrequencies(1, voz1);

  const voice2 = [
    523.25, 0.3, 587.33, 0.3, 659.25, 0.3, 698.46, 0.3, 784.00, 0.3, 880.00, 0.3, 1046.50, 0.3, 1174.66, 0.3,
    1318.51, 0.3, 1396.91, 0.3, 1567.98, 0.3, 1396.91, 0.3, 1318.51, 0.3, 1174.66, 0.3, 1046.50, 0.3, 880.00, 0.3,
    784.00, 0.3, 698.46, 0.3, 659.25, 0.3, 587.33, 0.3, 523.25, 0.3
  ]  
 
  sound.setVoiceType(2, VoiceType.SAWTOOTH);
  sound.setVoiceFrequencies(2, voice2);
 
  const voice3 = [  261.63, 0.6, 329.63, 0.6, 392.00, 0.6, 523.25, 0.3, 392.00, 0.6, 329.63, 0.6, 261.63, 0.6, 329.63, 0.6,  392.00, 0.6, 523.25, 0.3, 392.00, 0.6, 329.63, 0.6, 261.63, 0.6, 329.63, 0.6, 392.00, 0.6, 523.25, 0.3,  392.00, 0.6, 329.63, 0.6, 261.63, 0.6, 329.63, 0.6, 392.00, 0.6, 523.25, 0.3]

  sound.setVoiceType(3, VoiceType.TRIANGLE);
  sound.setVoiceFrequencies(3, voice3);
  
sound.play();

//sound.playReMayor();
//sound.play();