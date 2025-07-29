import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveImagecompare } from './responsive-imagecompare';

describe('ResponsiveImagecompare', () => {
  let component: ResponsiveImagecompare;
  let fixture: ComponentFixture<ResponsiveImagecompare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveImagecompare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveImagecompare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
