import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodyControlComponent } from './melody-control.component';

describe('MelodyControlComponent', () => {
  let component: MelodyControlComponent;
  let fixture: ComponentFixture<MelodyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodyControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
