import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlessDrawer } from './headless-drawer';

describe('HeadlessDrawer', () => {
  let component: HeadlessDrawer;
  let fixture: ComponentFixture<HeadlessDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlessDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlessDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
