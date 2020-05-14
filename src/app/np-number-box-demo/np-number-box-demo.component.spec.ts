import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpNumberBoxDemoComponent } from './np-number-box-demo.component';

describe('NpNumberBoxDemoComponent', () => {
  let component: NpNumberBoxDemoComponent;
  let fixture: ComponentFixture<NpNumberBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpNumberBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpNumberBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
