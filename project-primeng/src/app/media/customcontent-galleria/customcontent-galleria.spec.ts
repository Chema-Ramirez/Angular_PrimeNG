import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcontentGalleria } from './customcontent-galleria';

describe('CustomcontentGalleria', () => {
  let component: CustomcontentGalleria;
  let fixture: ComponentFixture<CustomcontentGalleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomcontentGalleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomcontentGalleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
