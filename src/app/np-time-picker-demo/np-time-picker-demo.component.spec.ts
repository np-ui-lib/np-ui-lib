import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTimePickerDemoComponent } from './np-time-picker-demo.component';

describe('NpTimePickerDemoComponent', () => {
  let component: NpTimePickerDemoComponent;
  let fixture: ComponentFixture<NpTimePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTimePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTimePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
