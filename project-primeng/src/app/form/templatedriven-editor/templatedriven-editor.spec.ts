import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenEditor } from './templatedriven-editor';

describe('TemplatedrivenEditor', () => {
  let component: TemplatedrivenEditor;
  let fixture: ComponentFixture<TemplatedrivenEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
