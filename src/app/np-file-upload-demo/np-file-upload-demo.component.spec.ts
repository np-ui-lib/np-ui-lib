import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpFileUploadDemoComponent } from './np-file-upload-demo.component';

describe('NpFileUploadDemoComponent', () => {
  let component: NpFileUploadDemoComponent;
  let fixture: ComponentFixture<NpFileUploadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpFileUploadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpFileUploadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
