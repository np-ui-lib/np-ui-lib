import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiPanelComponent } from './np-ui-panel.component';

describe('NpUiPanelComponent', () => {
  let component: NpUiPanelComponent;
  let fixture: ComponentFixture<NpUiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
