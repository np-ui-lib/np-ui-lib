import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpSwitchDemoComponent } from './np-switch-demo.component';

describe('NpSwitchDemoComponent', () => {
  let component: NpSwitchDemoComponent;
  let fixture: ComponentFixture<NpSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
