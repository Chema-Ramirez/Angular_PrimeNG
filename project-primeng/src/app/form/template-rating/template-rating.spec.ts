import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRating } from './template-rating';

describe('TemplateRating', () => {
  let component: TemplateRating;
  let fixture: ComponentFixture<TemplateRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
