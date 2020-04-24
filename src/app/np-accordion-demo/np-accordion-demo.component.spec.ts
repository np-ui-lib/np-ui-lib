import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAccordionDemoComponent } from './np-accordion-demo.component';

describe('NpAccordionDemoComponent', () => {
  let component: NpAccordionDemoComponent;
  let fixture: ComponentFixture<NpAccordionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpAccordionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpAccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
