import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTabsDemoComponent } from './np-ui-tabs-demo.component';

describe('NpUiTabsDemoComponent', () => {
  let component: NpUiTabsDemoComponent;
  let fixture: ComponentFixture<NpUiTabsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiTabsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiTabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
