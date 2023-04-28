import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalNoteInVoiceComponent } from './musical-note-in-voice.component';

describe('MusicalNoteInVoiceComponent', () => {
  let component: MusicalNoteInVoiceComponent;
  let fixture: ComponentFixture<MusicalNoteInVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalNoteInVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalNoteInVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
