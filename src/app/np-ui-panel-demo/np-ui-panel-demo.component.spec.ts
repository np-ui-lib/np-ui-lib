import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiPanelDemoComponent } from './np-ui-panel-demo.component';

describe('NpUiPanelDemoComponent', () => {
  let component: NpUiPanelDemoComponent;
  let fixture: ComponentFixture<NpUiPanelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiPanelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
