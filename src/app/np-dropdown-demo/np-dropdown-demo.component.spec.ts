import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpDropdownDemoComponent } from './np-dropdown-demo.component';

describe('NpDropdownDemoComponent', () => {
  let component: NpDropdownDemoComponent;
  let fixture: ComponentFixture<NpDropdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpDropdownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpDropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
