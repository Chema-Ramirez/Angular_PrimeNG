import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineButton } from './outline-button';

describe('OutlineButton', () => {
  let component: OutlineButton;
  let fixture: ComponentFixture<OutlineButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlineButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlineButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
