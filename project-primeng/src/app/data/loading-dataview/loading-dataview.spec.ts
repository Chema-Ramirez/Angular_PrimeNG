import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDataview } from './loading-dataview';

describe('LoadingDataview', () => {
  let component: LoadingDataview;
  let fixture: ComponentFixture<LoadingDataview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingDataview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingDataview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
