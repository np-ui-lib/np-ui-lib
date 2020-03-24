import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiSwitchDemoComponent } from './np-ui-switch-demo.component';

describe('NpUiSwitchDemoComponent', () => {
  let component: NpUiSwitchDemoComponent;
  let fixture: ComponentFixture<NpUiSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
