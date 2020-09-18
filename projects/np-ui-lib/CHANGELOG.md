# np-ui-lib
## Native Angular UI Components and Design Framework

## Change log and decision tracker

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