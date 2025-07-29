import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartercircleSpeeddial } from './quartercircle-speeddial';

describe('QuartercircleSpeeddial', () => {
  let component: QuartercircleSpeeddial;
  let fixture: ComponentFixture<QuartercircleSpeeddial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartercircleSpeeddial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartercircleSpeeddial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
