import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionConfirmdialog } from './position-confirmdialog';

describe('PositionConfirmdialog', () => {
  let component: PositionConfirmdialog;
  let fixture: ComponentFixture<PositionConfirmdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionConfirmdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionConfirmdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
