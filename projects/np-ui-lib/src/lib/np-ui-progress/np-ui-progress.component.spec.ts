import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiProgressComponent } from './np-ui-progress.component';

describe('NpUiProgressComponent', () => {
  let component: NpUiProgressComponent;
  let fixture: ComponentFixture<NpUiProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
