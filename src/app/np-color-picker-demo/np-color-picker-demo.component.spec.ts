import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpColorPickerDemoComponent } from './np-color-picker-demo.component';

describe('NpColorPickerDemoComponent', () => {
  let component: NpColorPickerDemoComponent;
  let fixture: ComponentFixture<NpColorPickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpColorPickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpColorPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
