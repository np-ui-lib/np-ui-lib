import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiNotificationComponent } from './np-ui-notification.component';

describe('NpUiNotificationComponent', () => {
  let component: NpUiNotificationComponent;
  let fixture: ComponentFixture<NpUiNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
