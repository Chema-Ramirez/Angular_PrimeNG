import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePicklist } from './template-picklist';

describe('TemplatePicklist', () => {
  let component: TemplatePicklist;
  let fixture: ComponentFixture<TemplatePicklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatePicklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePicklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
