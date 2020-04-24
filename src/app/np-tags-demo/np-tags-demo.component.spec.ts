import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTagsDemoComponent } from './np-tags-demo.component';

describe('NpTagsDemoComponent', () => {
  let component: NpTagsDemoComponent;
  let fixture: ComponentFixture<NpTagsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTagsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTagsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
