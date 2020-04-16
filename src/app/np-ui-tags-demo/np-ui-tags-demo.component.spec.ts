import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTagsDemoComponent } from './np-ui-tags-demo.component';

describe('NpUiTagsDemoComponent', () => {
  let component: NpUiTagsDemoComponent;
  let fixture: ComponentFixture<NpUiTagsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiTagsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiTagsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
