import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTooltipComponent } from './np-ui-tooltip.component';

describe('NpUiTooltipComponent', () => {
  let component: NpUiTooltipComponent;
  let fixture: ComponentFixture<NpUiTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
