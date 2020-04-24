import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAlertComponent } from './np-alert.component';

describe('NpAlertComponent', () => {
  let component: NpAlertComponent;
  let fixture: ComponentFixture<NpAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
