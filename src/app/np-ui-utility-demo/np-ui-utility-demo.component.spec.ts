import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiUtilityDemoComponent } from './np-ui-utility-demo.component';

describe('NpUiUtilityDemoComponent', () => {
  let component: NpUiUtilityDemoComponent;
  let fixture: ComponentFixture<NpUiUtilityDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiUtilityDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiUtilityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
