import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiProgressDemoComponent } from './np-ui-progress-demo.component';

describe('NpUiProgressDemoComponent', () => {
  let component: NpUiProgressDemoComponent;
  let fixture: ComponentFixture<NpUiProgressDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiProgressDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiProgressDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
