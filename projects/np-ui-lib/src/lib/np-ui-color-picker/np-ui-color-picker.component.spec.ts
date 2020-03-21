import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiColorPickerComponent } from './np-ui-color-picker.component';

describe('NpUiColorPickerComponent', () => {
    let component: NpUiColorPickerComponent;
    let fixture: ComponentFixture<NpUiColorPickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NpUiColorPickerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NpUiColorPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});