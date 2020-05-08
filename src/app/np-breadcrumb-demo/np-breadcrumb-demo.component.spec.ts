import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpBreadcrumbDemoComponent } from './np-breadcrumb-demo.component';

describe('NpBreadcrumbDemoComponent', () => {
  let component: NpBreadcrumbDemoComponent;
  let fixture: ComponentFixture<NpBreadcrumbDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpBreadcrumbDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpBreadcrumbDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
