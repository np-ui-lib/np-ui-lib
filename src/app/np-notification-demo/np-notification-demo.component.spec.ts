import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpNotificationDemoComponent } from './np-notification-demo.component';

describe('NpNotificationDemoComponent', () => {
  let component: NpNotificationDemoComponent;
  let fixture: ComponentFixture<NpNotificationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpNotificationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpNotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
