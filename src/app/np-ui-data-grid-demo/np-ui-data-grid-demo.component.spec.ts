import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDataGridDemoComponent } from './np-ui-data-grid-demo.component';

describe('NpUiDataGridDemoComponent', () => {
  let component: NpUiDataGridDemoComponent;
  let fixture: ComponentFixture<NpUiDataGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiDataGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiDataGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
