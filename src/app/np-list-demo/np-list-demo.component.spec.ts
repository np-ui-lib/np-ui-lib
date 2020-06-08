import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpListDemoComponent } from './np-list-demo.component';

describe('NpListDemoComponent', () => {
  let component: NpListDemoComponent;
  let fixture: ComponentFixture<NpListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
