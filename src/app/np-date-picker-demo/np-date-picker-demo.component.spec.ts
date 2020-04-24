import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpDatePickerDemoComponent } from './np-date-picker-demo.component';

describe('NpDatePickerDemoComponent', () => {
  let component: NpDatePickerDemoComponent;
  let fixture: ComponentFixture<NpDatePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpDatePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
