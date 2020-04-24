import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUtilityDemoComponent } from './np-utility-demo.component';

describe('NpUtilityDemoComponent', () => {
  let component: NpUtilityDemoComponent;
  let fixture: ComponentFixture<NpUtilityDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUtilityDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUtilityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
