import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpBlockuiDemoComponent } from './np-blockui-demo.component';

describe('NpBlockuiDemoComponent', () => {
  let component: NpBlockuiDemoComponent;
  let fixture: ComponentFixture<NpBlockuiDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpBlockuiDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpBlockuiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
