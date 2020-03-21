import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiTimePickerComponent } from './np-ui-time-picker.component';

describe('NpUiTimePickerComponent', () => {
    let component: NpUiTimePickerComponent;
    let fixture: ComponentFixture<NpUiTimePickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NpUiTimePickerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NpUiTimePickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});