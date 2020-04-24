import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAlertDemoComponent } from './np-alert-demo.component';

describe('NpAlertDemoComponent', () => {
  let component: NpAlertDemoComponent;
  let fixture: ComponentFixture<NpAlertDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpAlertDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
