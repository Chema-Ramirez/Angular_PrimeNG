import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDataview } from './layout-dataview';

describe('LayoutDataview', () => {
  let component: LayoutDataview;
  let fixture: ComponentFixture<LayoutDataview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDataview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDataview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
