import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiCarouselDemoComponent } from './np-ui-carousel-demo.component';

describe('NpUiCarouselDemoComponent', () => {
  let component: NpUiCarouselDemoComponent;
  let fixture: ComponentFixture<NpUiCarouselDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUiCarouselDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUiCarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
