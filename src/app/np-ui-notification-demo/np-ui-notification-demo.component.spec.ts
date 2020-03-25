import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiNotificationDemoComponent } from './np-ui-notification-demo.component';

describe('NpUiNotificationDemoComponent', () => {
  let component: NpUiNotificationDemoComponent;
  let fixture: ComponentFixture<NpUiNotificationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiNotificationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiNotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
