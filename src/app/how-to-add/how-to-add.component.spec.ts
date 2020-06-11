import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToAddComponent } from './how-to-add.component';

describe('HowToAddComponent', () => {
  let component: HowToAddComponent;
  let fixture: ComponentFixture<HowToAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
