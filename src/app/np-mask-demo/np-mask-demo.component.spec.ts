import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpMaskDemoComponent } from './np-mask-demo.component';

describe('NpMaskDemoComponent', () => {
  let component: NpMaskDemoComponent;
  let fixture: ComponentFixture<NpMaskDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpMaskDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpMaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
