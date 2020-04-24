import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpProgressDemoComponent } from './np-progress-demo.component';

describe('NpProgressDemoComponent', () => {
  let component: NpProgressDemoComponent;
  let fixture: ComponentFixture<NpProgressDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpProgressDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpProgressDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
