import { Observable, Subject } from "rxjs";
import { Frecuency } from "./Frecuency";
import Voice from "./Voice";
import VoiceType from "./VoiceType";

const AudioContext = window.AudioContext;

class SoundChip {

    private audioContext: AudioContext;
    private voice1: Voice;
    private voice2: Voice;
    private voice3: Voice;
    private playedNoteVoice1$ = new Subject<Frecuency>();
    private playedNoteVoice2$ = new Subject<Frecuency>();
    private playedNoteVoice3$ = new Subject<Frecuency>();
    private playedNoteVoice1Observer$ = new Observable<Frecuency>();
    private playedNoteVoice2Observer$ = new Observable<Frecuency>();
    private playedNoteVoice3Observer$ = new Observable<Frecuency>();

    constructor() {
        this.audioContext = new AudioContext();
        this.voice1 = new Voice(this.audioContext, 0.33);
        this.voice2 = new Voice(this.audioContext, 0.33);
        this.voice3 = new Voice(this.audioContext, 0.33);

        this.playedNoteVoice1Observer$ = this.voice1.getPlayedNote$();
        this.playedNoteVoice2Observer$ = this.voice2.getPlayedNote$();
        this.playedNoteVoice3Observer$ = this.voice3.getPlayedNote$();

        this.observerPlayedNoteVoice1();
        this.observerPlayedNoteVoice2();
        this.observerPlayedNoteVoice3();
    }

    getObserverPlayedNoteVoice$(voice: number): Observable<Frecuency> {
      if (voice == 1) {
        return this.playedNoteVoice1$.asObservable();
      } else if (voice == 2) {
        return this.playedNoteVoice2$.asObservable();
      }
      return this.playedNoteVoice3$.asObservable();
    }

    observerPlayedNoteVoice1() {
       this.playedNoteVoice1Observer$.subscribe(
        (frequency: Frecuency) => {
          this.playedNoteVoice1$.next(frequency);
        }
       )
    }

    observerPlayedNoteVoice2() {
      this.playedNoteVoice2Observer$.subscribe(
        (frequency: Frecuency) => {
          this.playedNoteVoice2$.next(frequency);
        }
       )
    }

    observerPlayedNoteVoice3() {
      this.playedNoteVoice3Observer$.subscribe(
        (frequency: Frecuency) => {
          this.playedNoteVoice3$.next(frequency);
        }
       )
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
