import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpListComponent } from './np-list.component';

describe('NpListComponent', () => {
  let component: NpListComponent;
  let fixture: ComponentFixture<NpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
