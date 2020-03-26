import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiAutoCompleteComponent } from './np-ui-auto-complete.component';

describe('NpUiAutoCompleteComponent', () => {
  let component: NpUiAutoCompleteComponent;
  let fixture: ComponentFixture<NpUiAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
