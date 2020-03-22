import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUiDataGridComponent } from './np-ui-data-grid.component';
import { NpFileService } from './services/np-ui-file.service';
import { NpFilterService } from './services/np-ui-filter.service';
import { NpODataService } from './services/np-ui-odata.service';
import { NpPagerService } from './services/np-ui-pager.service';
import { NpUtilityService } from './services/np-ui-utility.service';

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
        TestBed.configureTestingModule({
            providers: [NpFileService, NpFilterService, NpODataService, NpPagerService, NpUtilityService]
        });
        fixture = TestBed.createComponent(NpUiDataGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});