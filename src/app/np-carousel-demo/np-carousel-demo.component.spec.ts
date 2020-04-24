import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpCarouselDemoComponent } from './np-carousel-demo.component';

describe('NpCarouselDemoComponent', () => {
  let component: NpCarouselDemoComponent;
  let fixture: ComponentFixture<NpCarouselDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpCarouselDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpCarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
