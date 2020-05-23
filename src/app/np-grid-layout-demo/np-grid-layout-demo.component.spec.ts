import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpGridLayoutDemoComponent } from './np-grid-layout-demo.component';

describe('NpGridLayoutDemoComponent', () => {
  let component: NpGridLayoutDemoComponent;
  let fixture: ComponentFixture<NpGridLayoutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpGridLayoutDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpGridLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
