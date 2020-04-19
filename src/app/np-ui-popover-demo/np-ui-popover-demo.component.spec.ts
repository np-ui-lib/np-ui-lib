import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiPopoverDemoComponent } from './np-ui-popover-demo.component';

describe('NpUiPopoverDemoComponent', () => {
  let component: NpUiPopoverDemoComponent;
  let fixture: ComponentFixture<NpUiPopoverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiPopoverDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiPopoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
