import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HovereventGalleria } from './hoverevent-galleria';

describe('HovereventGalleria', () => {
  let component: HovereventGalleria;
  let fixture: ComponentFixture<HovereventGalleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HovereventGalleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HovereventGalleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
