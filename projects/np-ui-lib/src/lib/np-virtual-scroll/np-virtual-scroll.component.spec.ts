import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpVirtualScrollComponent } from './np-virtual-scroll.component';

describe('NpVirtualScrollComponent', () => {
  let component: NpVirtualScrollComponent;
  let fixture: ComponentFixture<NpVirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpVirtualScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
