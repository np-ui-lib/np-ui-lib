import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpModalDemoComponent } from './np-modal-demo.component';

describe('NpModalDemoComponent', () => {
  let component: NpModalDemoComponent;
  let fixture: ComponentFixture<NpModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
