import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledGalleria } from './controlled-galleria';

describe('ControlledGalleria', () => {
  let component: ControlledGalleria;
  let fixture: ComponentFixture<ControlledGalleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlledGalleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlledGalleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
