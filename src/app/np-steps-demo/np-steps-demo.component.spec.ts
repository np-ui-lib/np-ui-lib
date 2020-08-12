import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpStepsDemoComponent } from './np-steps-demo.component';

describe('NpStepsDemoComponent', () => {
  let component: NpStepsDemoComponent;
  let fixture: ComponentFixture<NpStepsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpStepsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpStepsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
