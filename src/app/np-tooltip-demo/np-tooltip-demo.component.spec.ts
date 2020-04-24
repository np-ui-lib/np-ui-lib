import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTooltipDemoComponent } from './np-tooltip-demo.component';

describe('NpTooltipDemoComponent', () => {
  let component: NpTooltipDemoComponent;
  let fixture: ComponentFixture<NpTooltipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTooltipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
