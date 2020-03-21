import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';

describe('NpUiColorPickerDemoComponent', () => {
  let component: NpUiColorPickerDemoComponent;
  let fixture: ComponentFixture<NpUiColorPickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiColorPickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiColorPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
