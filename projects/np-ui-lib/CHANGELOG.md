# np-ui-lib
## Native Angular UI Components and Design Framework

## Change log and decision tracker

## 10.6.0
- Add tiles view in list component
- Add paginator component in list component and add related properties, methods and apis
- Add selection property in list component
- Remove apis selectItem, selectItemByIndex, deselectItem, deselectItemByIndex, setSelectedItems from list component
- Rename clear to deselectAll api in list component
- Add selectRowByKey, deselectRowByKey apis to datagrid component
- Add valueKey in dropdown
- Recreate auto complete component, check documentation for details
- Resolved time issue when seconds are hidden and padStart 0 for all numbers in time picker component
- Recreate tags component, check documentation for details
- Add valueKey proerpty in list component
- Add new checkbox component
- Change onSelect and onDeselect parameters in datagrid
- Add new radio button component
- Remove clear button from datepicker, timepicker, colorpicker, autocomplete, tags
- Add new input text component
- Add new textarea component

## 10.5.2
- Add getCurrentStateName Api to data grid
- Add new directive npAutoFocus
- Add npAutoFocus in all input controls
- Add iconCss in header type menu item
- Add onFocus and onBlur methods to input controls
- Add outline css to focused element

## 10.5.1
- Add rgb and hex predefined colors list in color picker
- Add parameters to onStatesUpdate in datagrid

## 10.5.0
- Add new calendar component
- Resolved issue for disabled weekdays for start from monday in date picker
- Add context property to tooltip and popover components
- Add width property for tooltip
- Add onClick on list item
- Remove format from number box and add pattern for regex
- Add prefixLabel, suffixLabel in number box
- Remove hideColorInput, placeholder, getSelectedRGB, setSelectedRGB from color picker
- Add format in color picker
- Add loadStateByName and isReadOnlyStates in datagrid

## 10.4.2
- Minor improvements
- Add accessibility attributes
- Add header in list and virtual scroll
- Resolved virtual scroll height issue
- Rename virtual scroll data proerpty to items
- Add showFileSize in file upload
- Add remove file button in file upload
- Change ngModel type to File[] in file upload
- apply date format in export to csv in data grid 
- Resolved datagrid master child expand collapse issue when expandRowOnClick is true
- Add scrollToIndex and scrollToOffset apis in virtual scroll

## 10.4.1
- Resolved minor bugs
- Add closeOnClickOutside, inputId and styleClass in modal and dialog
- Add tabIndex property to all input components
- Rename readonly to readOnly, O in uppercase
- Call onTouchedCallback on blur event of every input component
- Add isHeader property in menu item
- Slider change value label on input event
- Add Tab, Escape, ArrowDown key support for input controls for overlay
- Rename key to id in NpTreeViewItem
- Add typography css for header tags

## 10.4.0
- Resolved data grid state variable reference issue
- Add disabled property in breadcrumb model
- Rename horizontalTabs to verticalTabs in tab component
- Add verticalSteps property to steps component
- Rename showOnClick to openOnClick in popover
- Rename show Api to open in popover
- Add onOpen and onClose methods to popover
- Add closeOnClickOutside in popover
- backdrop CSS class name enhancements
- Add itemTemplate property in treeview
- Add new paginator component
- Replace datagrid paginator with new paginator component
- Add lazy loading in tabs, accordion, panel components
- Recreate Modal and Dialog components

## 10.3.2
- Resolved client side filter issue for date in data grid
- Add dateFormat property in data grid for formatting all dates in data grid
- Add trackBy function for ngFor in data grid, treeview, list, tags, dropdown, autocomplete, carousel components
- Add iconCss in steps component

## 10.3.1
- Add tabindex="-1" for internal buttons and other controls to make proper tab flow in forms
- Add autoFocus property to all input controls
- Add tooltip in slider component while hover
- Resolved issue for parent menu active in menubar, text wrap in horizonal menu item
- Some CSS improvements and performance enhancements

## 10.3.0
- Replace static px sizes with rem
- Add CSS classes to all controls to make automation and unit testing easy

## 10.2.7
- No history available