import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpPanelDemoComponent } from './np-panel-demo.component';

describe('NpPanelDemoComponent', () => {
  let component: NpPanelDemoComponent;
  let fixture: ComponentFixture<NpPanelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpPanelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
