import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridDocComponent } from './data-grid-doc.component';

describe('DataGridDocComponent', () => {
  let component: DataGridDocComponent;
  let fixture: ComponentFixture<DataGridDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
