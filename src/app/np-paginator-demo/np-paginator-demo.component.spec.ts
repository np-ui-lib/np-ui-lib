import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpPaginatorDemoComponent } from './np-paginator-demo.component';

describe('NpPaginatorDemoComponent', () => {
  let component: NpPaginatorDemoComponent;
  let fixture: ComponentFixture<NpPaginatorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpPaginatorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpPaginatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
