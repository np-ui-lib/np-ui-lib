import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiModalDemoComponent } from './np-ui-modal-demo.component';

describe('NpUiModalDemoComponent', () => {
  let component: NpUiModalDemoComponent;
  let fixture: ComponentFixture<NpUiModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
