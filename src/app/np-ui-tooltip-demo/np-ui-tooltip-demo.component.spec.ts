import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTooltipDemoComponent } from './np-ui-tooltip-demo.component';

describe('NpUiTooltipDemoComponent', () => {
  let component: NpUiTooltipDemoComponent;
  let fixture: ComponentFixture<NpUiTooltipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiTooltipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiTooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
