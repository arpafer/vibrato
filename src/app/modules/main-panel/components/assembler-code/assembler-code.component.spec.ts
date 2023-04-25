import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblerCodeComponent } from './assembler-code.component';

describe('AssemblerCodeComponent', () => {
  let component: AssemblerCodeComponent;
  let fixture: ComponentFixture<AssemblerCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblerCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblerCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
