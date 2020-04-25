import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpCardDemoComponent } from './np-card-demo.component';

describe('NpCardDemoComponent', () => {
  let component: NpCardDemoComponent;
  let fixture: ComponentFixture<NpCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
