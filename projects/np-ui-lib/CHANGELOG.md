# np-ui-lib
## Native Angular UI Components and Design Framework

## Change log and decision tracker

# 11.1.5
- Add sidepanel service
- Add new dateClass property to date picker
- Add new dateClass property to calendar
- Firefox click issue resolved for radio button and checkbox
- Resolved css issue for calendar events

# 11.1.4
- Resolved css issue in datagrid

# 11.1.3
- Add npSidepanelContent directive for lazy loading
- Vertical steps layout update
- Remove stickyColumnLeft, stickyColumnRight from data grid

# 11.1.2
- Resolved css issue for vertical line in vertical steps
- Add onCreateNewTag method in tags component
- Change return object in dialog component on close
- Add validation for state name already exists in data grid, and add translation for validation message

# 11.1.1
- Resolved dialog component issue for npAutofocus
- Resolved css class issue in virtual scroll
- Resolved font and background color button issue in rich text

## 11.1.0
- Some CSS class name changes in datagrid
- Remove files count from file upload component
- Remove NpUtilityModule and create separate NoAutofocusModule, NpHighlightModule, NpMaskModule, NpOrderByModule
- Add npDefer directive
- Add new timeline component

## 11.0.3
- Add sub and sup script in rich text editor
- Add config property to show/hide commands in rich text editor
- Add fonts property to set dropdown options for fonts in rich text editor
- Add minLength and maxLength validation in rich text editor
- Style update for card component

## 11.0.2
- Minor bug fixes
- Add trueFilterText, falseFilterText properties in column model of datagrid

## 11.0.1
- Resolved entry component issue in Modal and Dialog
- Add inputId in popup menubar directive

## 11.0.0
- Upgrade to Angular 11

## 10.9.0
- Add new SASS variable for boarder radius
- Remove allowSelection and add selectionMode in list component
- Radio button and group recreate component
- Aria and role attribute updates
- Rename all directives and pipes np-loader = npLoader, no-blockui = npBlockUi, np-mask = npMask,  
np-tooltip = npTooltip, np-popover = npPopover, np-popup-menubar = npPopupMenubar, np-highlight = npHighlight,  
np-autofocus = npAutofocus  

## 10.8.5
- Minor improvements in tooltip and popover triggers

## 10.8.4
- Minor improvements
- Add font and size in rich text editor
- Recreate sidepanel component

## 10.8.3
- Add theme and scss files which were missing in 10.8.2

## 10.8.2
- Add new rich text component

## 10.8.1
- Minor improvments

## 10.8.0
- Add i18N support and related services
- Add id to breadcrumb menu item

## 10.7.3
- Resolved color picker pre defined color issue

## 10.7.2
- Resolved SCSS copilation issue

## 10.7.1
- Resolved SCSS compilation issue
- Add id to menu item model
- Change default stroke width for loader to 4px

## 10.7.0
- Add scss instead of css
- Add theming and 2 default themes

## 10.6.3
- Remove default tabIndex as 0 for all input controls
- WAI-ARIA support
- add name property to radio button for grouping them

## 10.6.2
- Add resize property to textarea
- Resolved row selection issues in data grid
- Set default tabIndex as 0 for all input controls

## 10.6.1
- Resolved issue in object compare utility for tags and dropdown

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
- Resolved datagrid master detail expand collapse issue when expandRowOnClick is true
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