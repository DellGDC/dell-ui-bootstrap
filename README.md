# Dell UI Bootstrap

This is a Bower component for Dell's implementation and theming of [Bootstrap](http://getbootstrap.com/) CSS only.
Bootstrap.js and jQuery are only included for the demo page.

Dell specific icon font and Museo for Dell are included for use in Dell related sites but it does not include Bootstrap's glyphicons.

## Installation:

`bower install dell-ui-bootstrap`

NOTE: For usage with dell.com applications use dell-ui-components package which includes this package. `bower install dell-ui-components`

### Version history:
You can install a specific version with 'bower install dell-ui-bootstrap#&lt;version&gt;'

**1.3.1** - November 27, 2017:
  •	Multiple updates with new brand modifications:
  •	Adjust the Tool-tip border color
  •	Adjust the Popover border color
  •	Change the close "X" to black and no hover color change globally
  •	Add padding ti the hit-target for the close "X"
  •	Adjust the pager box shadow to match buttons
  •	Adjust the Modal close "X" and position
  •	Added pointer-events: none; on all disabled buttons
  •	Adjusted pager background and hover colors to match buttons
  •	Removed @dell-blue-hover and @Dell-green-hover (old colors)
  •	Adjusted @padding-large-horizontal: 15px; globally
  •	Core updates to Bower.jason and package.jason with the upgrade to Bootstrap 3.3.7
  •	Updated core colors to align with new colors and names
  •	Added colors moon, sea-blue, sky, mist
  •	Updated all text to black
  •	Updated core fonts to align with Roboto fonts set used by Development so this eliminates font inconsistency
  •	Updated the DEMO.HTML typography with new fonts supplied from Development
  •	Updated button inner click and shadow to align with design updates
  •	Cleaning up core bootstrap variables.less code and adding disabled sets to variables.less code
  •	Fixing buttons to NOT use <a HREF=""> All buttons must use “<button>” instead per production feedback
  •	Update btn-default disabled stroke color
  •	Update btn-default disabled txt color
  •	Update btn-default disabled hover colors
  •	Turned border color on hover for primary-purchase and non-purchase to transparent
  •	Turned all @cursor-disabled to none on hover for all disabled states
  •	Changed Link Hover color to @dell-midnight
  •	changed alerts text color to black
  •	Updated breadcrumb colors to @dell-carbon
  •	Increased the font size for breadcrumbs to 14px
  •	Increased the chevrons for breadcrumbs to 16px
  •	Updated Dell-ui-bootstrap Demo Typography to align with Dell-ui-components Demo Typography page...
  •	Changed all font-weight: 700 > font-weight: Bold
  •	Updated layout for the demo page...easier proofing of elements
  •	Worked on updated the List items…
  •	Adjusted spacing of default indent on lists
  •	Adjusted the padding before Description lists and after each dd + dt element
  •	For Button disabled states, added "pointer-event:none;" cursor disabled and the event is = to none
  •	For carousel, changed the small Chicklet marks to 14px 7px and removed border
  •	Adjusted the Chicklet default un-active color to @dell-granite
  •	Update Panel-default colorsadded fix for "  .tabbable { ul, ol { margin-left: 0px; } } "Updated the accordion/panels heading color and corresponding toggle arrow coloradded underline for accordion headins on hover
  •	Create build for testing.

### Older versions:

```
**1.2.6** - September 21, 2016:
  Removing museo and updating font ramp with Roboto, including Dell EMC font icons...

#1.2.5 - Fixed issue with success button being black on focus/active

#1.2.4 - Added missing background to tooltips

#1.2.3 - Made changes to typography for internationalized fonts

#1.2.2 - Updated icons fonts and added icon-ui-handle

#1.2.1 - Updated to Bootstrap version 3.3.5

#1.2.0 - Removed dev files from bower package and included variable and mixin fils in dist folder

#1.0.6 - Added height to .modal-backdrop

#1.0.5 - Fixed issue with spacing for multiple <p> in alerts

#1.0.4 - Made edits to demo and removed most non-bootstrap elements (except colors). Made adjustments to alerts, blockquotes, colors, buttons, component-animations, containers, form checkboxes and radios, pager, lists, pagination, panels, popovers, progress-bars, typography

#1.0.3 - Fixed issues with popovers. - Added Bootstrap glyphicons.

#1.0.2 - Added grunt-bless to split css for IE consumption to defeat IE selector limit issue

#1.0.1 - Upgraded to Bootstrap 3.3.1 and had minor fix on tooltip

#1.0.0 - Initial publish of theme





...
```
