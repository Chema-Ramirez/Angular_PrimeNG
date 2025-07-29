import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablePopover } from './datatable-popover';

describe('DatatablePopover', () => {
  let component: DatatablePopover;
  let fixture: ComponentFixture<DatatablePopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatablePopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatablePopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
