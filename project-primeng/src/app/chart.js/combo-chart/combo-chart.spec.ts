import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboChart } from './combo-chart';

describe('RadarChart', () => {
  let component: ComboChart;
  let fixture: ComponentFixture<ComboChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
