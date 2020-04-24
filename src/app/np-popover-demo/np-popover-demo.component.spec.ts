import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpPopoverDemoComponent } from './np-popover-demo.component';

describe('NpPopoverDemoComponent', () => {
  let component: NpPopoverDemoComponent;
  let fixture: ComponentFixture<NpPopoverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpPopoverDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpPopoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
