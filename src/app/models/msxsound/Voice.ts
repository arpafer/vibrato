import { Observable, Subject } from "rxjs";
import { Frecuency } from "./Frecuency";
import VoiceType from "./VoiceType";

export default class Voice {
    private voice: OscillatorNode;
    private gain: GainNode;
    private frecuencies: Frecuency[];
    private audioContext: AudioContext;
    private volume: number;
    private type: VoiceType;
    private playedNote$ = new Subject<Frecuency>();

    constructor(audioContext: AudioContext, volume: number = 0.5, type: VoiceType = VoiceType.SINE) {
        this.audioContext = audioContext;
        this.volume = volume;
        this.type = type;
        this.frecuencies = [];
        this.voice = this.audioContext.createOscillator();
        this.gain = this.audioContext.createGain();
        this.createOscillator();
    }

    getPlayedNote$(): Observable<Frecuency> {
       return this.playedNote$.asObservable();
    }

    private createOscillator() {
        this.voice = this.audioContext.createOscillator();
        this.voice.type = this.type;
        this.gain = this.audioContext.createGain();
        this.gain.gain.value = this.volume;
        this.voice.connect(this.gain);
        this.gain.connect(this.audioContext.destination);
    }

    public setType(type: VoiceType) {
        this.type = type;
    }

    setVolume(volume: number) {
        this.gain.gain.value = volume;
    }

    addFrecuency(frecuency: number, duration: number) {
        this.frecuencies.push(new Frecuency(frecuency, duration));
    }

    start(): void {
      this._start(0);
    }

    private _start(freqIndex: number): void {
        if (freqIndex <= this.frecuencies.length - 1) {
            this.createOscillator();
            let frequency: Frecuency = this.frecuencies[freqIndex];
            this.voice.frequency.value = frequency.value;
            this.voice.start();
            this.voice.stop(this.audioContext.currentTime + frequency.duration);
            this.voice.onended = () => {
              this.playedNote$.next(frequency);
              this._start(freqIndex + 1);
            }
        }
    }
}
