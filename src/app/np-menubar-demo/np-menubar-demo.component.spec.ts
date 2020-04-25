import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpMenubarDemoComponent } from './np-menubar-demo.component';

describe('NpMenubarDemoComponent', () => {
  let component: NpMenubarDemoComponent;
  let fixture: ComponentFixture<NpMenubarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpMenubarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpMenubarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
