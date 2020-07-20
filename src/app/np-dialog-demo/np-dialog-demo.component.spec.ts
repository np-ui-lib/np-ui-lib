import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpDialogDemoComponent } from './np-dialog-demo.component';

describe('NpDialogDemoComponent', () => {
  let component: NpDialogDemoComponent;
  let fixture: ComponentFixture<NpDialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpDialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
