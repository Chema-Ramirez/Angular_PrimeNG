import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenKnob } from './templatedriven-knob';

describe('TemplatedrivenKnob', () => {
  let component: TemplatedrivenKnob;
  let fixture: ComponentFixture<TemplatedrivenKnob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenKnob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenKnob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
