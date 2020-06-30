import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpVirtualScrollDemoComponent } from './np-virtual-scroll-demo.component';

describe('NpVirtualScrollDemoComponent', () => {
  let component: NpVirtualScrollDemoComponent;
  let fixture: ComponentFixture<NpVirtualScrollDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpVirtualScrollDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpVirtualScrollDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
