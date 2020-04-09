import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiAccordionDemoComponent } from './np-ui-accordion-demo.component';

describe('NpUiAccordionDemoComponent', () => {
  let component: NpUiAccordionDemoComponent;
  let fixture: ComponentFixture<NpUiAccordionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiAccordionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiAccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
