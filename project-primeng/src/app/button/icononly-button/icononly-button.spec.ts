import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcononlyButton } from './icononly-button';

describe('IcononlyButton', () => {
  let component: IcononlyButton;
  let fixture: ComponentFixture<IcononlyButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcononlyButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcononlyButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
