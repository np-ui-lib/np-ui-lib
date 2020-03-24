import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDatePickerComponent } from './np-ui-date-picker.component';

describe('NpUiDatePickerComponent', () => {
    let component: NpUiDatePickerComponent;
    let fixture: ComponentFixture<NpUiDatePickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NpUiDatePickerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NpUiDatePickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});