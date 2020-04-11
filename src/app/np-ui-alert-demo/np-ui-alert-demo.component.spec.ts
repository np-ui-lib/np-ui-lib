import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiAlertDemoComponent } from './np-ui-alert-demo.component';

describe('NpUiAlertDemoComponent', () => {
  let component: NpUiAlertDemoComponent;
  let fixture: ComponentFixture<NpUiAlertDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiAlertDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
