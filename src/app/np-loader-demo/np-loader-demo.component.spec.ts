import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpLoaderDemoComponent } from './np-loader-demo.component';

describe('NpLoaderDemoComponent', () => {
  let component: NpLoaderDemoComponent;
  let fixture: ComponentFixture<NpLoaderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpLoaderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpLoaderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
