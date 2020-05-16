import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTreeViewDemoComponent } from './np-tree-view-demo.component';

describe('NpTreeViewDemoComponent', () => {
  let component: NpTreeViewDemoComponent;
  let fixture: ComponentFixture<NpTreeViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTreeViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTreeViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
