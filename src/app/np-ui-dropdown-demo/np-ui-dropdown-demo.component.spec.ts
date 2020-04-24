import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDropdownDemoComponent } from './np-ui-dropdown-demo.component';

describe('NpUiDropdownDemoComponent', () => {
  let component: NpUiDropdownDemoComponent;
  let fixture: ComponentFixture<NpUiDropdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiDropdownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiDropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
