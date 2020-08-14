import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpNotificationsDemoComponent } from './np-notifications-demo.component';

describe('NpNotificationsDemoComponent', () => {
  let component: NpNotificationsDemoComponent;
  let fixture: ComponentFixture<NpNotificationsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NpNotificationsDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpNotificationsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
