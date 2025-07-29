import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAccordion } from './template-accordion';

describe('TemplateAccordion', () => {
  let component: TemplateAccordion;
  let fixture: ComponentFixture<TemplateAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
