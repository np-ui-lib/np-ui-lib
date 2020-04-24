import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpDataGridDemoComponent } from './np-data-grid-demo.component';

describe('NpDataGridDemoComponent', () => {
  let component: NpDataGridDemoComponent;
  let fixture: ComponentFixture<NpDataGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpDataGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpDataGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
