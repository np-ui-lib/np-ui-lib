import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDatePickerDemoComponent } from './np-ui-date-picker-demo.component';

describe('NpUiDatePickerDemoComponent', () => {
  let component: NpUiDatePickerDemoComponent;
  let fixture: ComponentFixture<NpUiDatePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiDatePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
