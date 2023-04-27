import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalNoteComponent } from './musical-note.component';

describe('MusicalNoteComponent', () => {
  let component: MusicalNoteComponent;
  let fixture: ComponentFixture<MusicalNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
