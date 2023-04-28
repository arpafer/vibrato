import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRepositoryComponent } from './notes-repository.component';

describe('NotesRepositoryComponent', () => {
  let component: NotesRepositoryComponent;
  let fixture: ComponentFixture<NotesRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
