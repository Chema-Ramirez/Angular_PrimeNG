import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGalleria } from './template-galleria';

describe('TemplateGalleria', () => {
  let component: TemplateGalleria;
  let fixture: ComponentFixture<TemplateGalleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateGalleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateGalleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
