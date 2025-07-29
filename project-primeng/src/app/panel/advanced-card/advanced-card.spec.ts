import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCard } from './advanced-card';

describe('AdvancedCard', () => {
  let component: AdvancedCard;
  let fixture: ComponentFixture<AdvancedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
