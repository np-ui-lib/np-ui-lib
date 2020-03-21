import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDataGridComponent } from './np-ui-data-grid.component';

describe('NpUiDataGridComponent', () => {
    let component: NpUiDataGridComponent;
    let fixture: ComponentFixture<NpUiDataGridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NpUiDataGridComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NpUiDataGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});