import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiSwitchComponent } from './np-ui-switch.component';

describe('NpUiSwitchComponent', () => {
  let component: NpUiSwitchComponent;
  let fixture: ComponentFixture<NpUiSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
