import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTabsDemoComponent } from './np-tabs-demo.component';

describe('NpTabsDemoComponent', () => {
  let component: NpTabsDemoComponent;
  let fixture: ComponentFixture<NpTabsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTabsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
