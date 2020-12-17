import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class NpTranslationsService {
    private _translations: any;
    public onTranslationsChange: BehaviorSubject<any>;

    constructor() {
        this._setDefaultTranslations();
        this.onTranslationsChange = new BehaviorSubject(null);
    }

    setTranslations = function (translations: any) {
        if (!translations) {
            this._setDefaultTranslations();
        } else {
            this._translations = translations;
        }
        this.onTranslationsChange.next(null);
    }

    translate(key: string) {
        return this._translations[key] || key;
    }

    private _setDefaultTranslations() {
        this._translations = {
            'Su': 'Su',
            'Mo': 'Mo',
            'Tu': 'Tu',
            'We': 'We',
            'Th': 'Th',
            'Fr': 'Fr',
            'Sa': 'Sa',
            'Sunday': 'Sunday',
            'Monday': 'Monday',
            'Tuesday': 'Tuesday',
            'Wednesday': 'Wednesday',
            'Thursday': 'Thursday',
            'Friday': 'Friday',
            'Saturday': 'Saturday',
            'January': 'January',
            'February': 'February',
            'March': 'March',
            'April': 'April',
            'May': 'May',
            'June': 'June',
            'July': 'July',
            'August': 'August',
            'September': 'September',
            'October': 'October',
            'November': 'November',
            'December': 'December',
            'Today': 'Today',
            'Ok': 'Ok',
            'Clear': 'Clear',
            'Cancel': 'Cancel',
            'No_Result_Found': 'No result found',
            'Select': 'Select...',
            'Search': 'Search...',
            'Reset': 'Reset',
            'True': 'True',
            'False': 'False',
            'No_Data_Found': 'No data found',
            'Search_Columns': 'Search columns...',
            'Saved_Successfully': 'Saved successfully',
            'Add_New_State': 'Add new state',
            'Deleted_Successfully': 'Deleted successfully',
            'Alert': 'Alert',
            'Confirm': 'Confirm',
            'Prompt': 'Prompt',
            'Choose_Files': 'Choose files',
            'Choose_File': 'Choose file',
            'Items_Per_Page': 'Items per page',
            'Now': 'Now',
            '>': '>',
            '<': '<',
            '>=': '>=',
            '<=': '<=',
            '=': '=',
            '!=': '!=',
            'abc': 'abc',
            'abc*': 'abc*',
            '*abc': '*abc',
            '*abc*': '*abc*',
            'Enter_The_URL_For_Link': 'Enter the URL for link',
            'Formatting': 'Formatting',
            'Header_1': 'Header 1 <h1>',
            'Header_2': 'Header 2 <h2>',
            'Header_3': 'Header 3 <h3>',
            'Header_4': 'Header 4 <h4>',
            'Header_5': 'Header 5 <h5>',
            'Header_6': 'Header 6 <h6>',
            'Paragraph': 'Paragraph <p>',
            'Preformatted': 'Preformatted <pre>'
        };
    }
}