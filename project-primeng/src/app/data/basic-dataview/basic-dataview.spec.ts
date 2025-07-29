import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataview } from './basic-dataview';

describe('BasicDataview', () => {
  let component: BasicDataview;
  let fixture: ComponentFixture<BasicDataview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDataview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDataview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
