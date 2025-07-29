import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberstarsRating } from './numberstars-rating';

describe('NumberstarsRating', () => {
  let component: NumberstarsRating;
  let fixture: ComponentFixture<NumberstarsRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberstarsRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberstarsRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
