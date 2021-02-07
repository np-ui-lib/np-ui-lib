import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-i18n-demo',
  templateUrl: './np-i18n-demo.component.html'
})
export class NpI18nDemoComponent implements OnInit {

  importText = 'import { NpTranslationsModule } from \'np-ui-lib\';';
  serviceInjectText = `constructor(private translateService: NpTranslationsService) { }`;
  addTanslationText = `this.translateService.setTranslations({
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
    'State_Name_Already_Exists': 'State name already exists',
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
    'Font': 'Font',
    'Font_Size': 'Font size'
  });`;
  defaultTransSetText = `this.translateService.setTranslations(null);`;

  constructor() { }

  ngOnInit(): void {
  }

}
