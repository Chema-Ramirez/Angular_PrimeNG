import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTimeline } from './template-timeline';

describe('TemplateTimeline', () => {
  let component: TemplateTimeline;
  let fixture: ComponentFixture<TemplateTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
