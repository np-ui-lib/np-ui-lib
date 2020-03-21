import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTimePickerDemoComponent } from './np-ui-time-picker-demo.component';

describe('NpUiTimePickerDemoComponent', () => {
  let component: NpUiTimePickerDemoComponent;
  let fixture: ComponentFixture<NpUiTimePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiTimePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiTimePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
