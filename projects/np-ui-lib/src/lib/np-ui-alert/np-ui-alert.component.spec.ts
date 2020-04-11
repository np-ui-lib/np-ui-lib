import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiAlertComponent } from './np-ui-alert.component';

describe('NpUiAlertComponent', () => {
  let component: NpUiAlertComponent;
  let fixture: ComponentFixture<NpUiAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
