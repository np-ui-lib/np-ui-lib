import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiAutoCompleteDemoComponent } from './np-ui-auto-complete-demo.component';

describe('NpUiAutoCompleteDemoComponent', () => {
  let component: NpUiAutoCompleteDemoComponent;
  let fixture: ComponentFixture<NpUiAutoCompleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiAutoCompleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiAutoCompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
