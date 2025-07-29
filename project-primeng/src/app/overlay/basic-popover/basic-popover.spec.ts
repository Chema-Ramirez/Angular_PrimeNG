import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPopover } from './basic-popover';

describe('BasicPopover', () => {
  let component: BasicPopover;
  let fixture: ComponentFixture<BasicPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
