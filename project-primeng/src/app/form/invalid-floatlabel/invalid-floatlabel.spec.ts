import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFloatlabel } from './invalid-floatlabel';

describe('InvalidFloatlabel', () => {
  let component: InvalidFloatlabel;
  let fixture: ComponentFixture<InvalidFloatlabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidFloatlabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidFloatlabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
