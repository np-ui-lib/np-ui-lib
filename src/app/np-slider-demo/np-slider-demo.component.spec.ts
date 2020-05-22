import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpSliderDemoComponent } from './np-slider-demo.component';

describe('NpSliderDemoComponent', () => {
  let component: NpSliderDemoComponent;
  let fixture: ComponentFixture<NpSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
