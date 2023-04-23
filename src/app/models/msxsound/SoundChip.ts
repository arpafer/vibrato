import Voice from "./Voice";
import VoiceType from "./VoiceType";

const AudioContext = window.AudioContext;

class SoundChip {

    private audioContext: AudioContext;
    private voice1: Voice;
    private voice2: Voice;
    private voice3: Voice;

    constructor() {
        this.audioContext = new AudioContext();
        this.voice1 = new Voice(this.audioContext, 0.33);
        this.voice2 = new Voice(this.audioContext, 0.33);
        this.voice3 = new Voice(this.audioContext, 0.33);
    }
    
    public setVoiceFrequencies(voiceIndex: number, frecuencies: number[]) {
       for (let i = 0; i < frecuencies.length; i += 2) {
         let frecuency: number = frecuencies[i];
         let duration: number = frecuencies[i + 1];
         switch (voiceIndex) { 
            case 1: 
              this.voice1.addFrecuency(frecuency, duration); break;
            case 2: 
               this.voice2.addFrecuency(frecuency, duration); break;
            case 3:
               this.voice3.addFrecuency(frecuency, duration); break;
           }
        }
       
    }

    public setVoiceType(voiceIndex: number, type: VoiceType) {
        switch (voiceIndex) {
            case 1: this.voice1.setType(type); break;
            case 2: this.voice2.setType(type); break;
            case 3: this.voice3.setType(type); break;
        }
    }

    public setVoiceVolume(voiceIndex: number, volume: number) {
        switch (voiceIndex) {
            case 1: this.voice1.setVolume(volume); break;
            case 2: this.voice2.setVolume(volume); break;
            case 3: this.voice3.setVolume(volume); break;
        }
    }

    public play(duration: number = 1) {
        // Iniciar la reproducción de los osciladores
       this.voice1.start();
       this.voice2.start();
       this.voice3.start();
    }

   }

export default SoundChip;