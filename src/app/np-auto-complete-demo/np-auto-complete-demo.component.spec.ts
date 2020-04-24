import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAutoCompleteDemoComponent } from './np-auto-complete-demo.component';

describe('NpAutoCompleteDemoComponent', () => {
  let component: NpAutoCompleteDemoComponent;
  let fixture: ComponentFixture<NpAutoCompleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpAutoCompleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpAutoCompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
