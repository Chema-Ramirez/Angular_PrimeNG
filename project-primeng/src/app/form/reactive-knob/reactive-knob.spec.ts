import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveKnob } from './reactive-knob';

describe('ReactiveKnob', () => {
  let component: ReactiveKnob;
  let fixture: ComponentFixture<ReactiveKnob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveKnob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveKnob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
