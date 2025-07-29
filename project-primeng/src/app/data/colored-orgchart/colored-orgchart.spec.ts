import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredOrgchart } from './colored-orgchart';

describe('ColoredOrgchart', () => {
  let component: ColoredOrgchart;
  let fixture: ComponentFixture<ColoredOrgchart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredOrgchart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredOrgchart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
