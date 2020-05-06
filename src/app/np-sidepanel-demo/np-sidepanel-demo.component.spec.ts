import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpSidepanelDemoComponent } from './np-sidepanel-demo.component';

describe('NpSidepanelDemoComponent', () => {
  let component: NpSidepanelDemoComponent;
  let fixture: ComponentFixture<NpSidepanelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpSidepanelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpSidepanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
