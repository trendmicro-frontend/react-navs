# react-navs [![build status](https://travis-ci.org/trendmicro-frontend/react-navs.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-navs) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-navs/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-navs?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-navs.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-navs/)

React Navs

Demo: https://trendmicro-frontend.github.io/react-navs

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-navs](https://github.com/trendmicro-frontend/react-navs):

  ```
  npm install --save react @trendmicro/react-navs
  ```

2. At this point you can import `@trendmicro/react-navs` and its styles in your application as follows:

  ```js
  import { Nav, NavItem } from '@trendmicro/react-navs';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-navs/dist/react-navs.css';
  ```

## Usage

```js
<Nav
    navStyle="tabs"
    activeKey={this.state.activeTab}
    onSelect={(eventKey, event) => {
        this.setState({ activeTab: eventKey });
    }}
>
    <NavItem eventKey={1}>Item 1</NavItem>
    <NavItem eventKey={2}>Item 2</NavItem>
    <NavItem eventKey={3}>Item 3</NavItem>
    <NavItem eventKey={4}>Item 4</NavItem>
</Nav>
```

## API

### Properties

#### Nav

Name | Type | Default | Description
:--- | :--- | :------ | :----------
activeHref | string | | Marks the child NavItem with a matching `href` prop as active.
activeKey | any | | Marks the NavItem with a matching `eventKey` as active. Has a higher precedence over `activeHref`.
navStyle | One of:<br/>'tabs'<br/>'light-tabs'<br/>'panel-tabs' | 'tabs' | Component visual or contextual style variants.
justified | boolean | false | Make tabs equal widths of their parent at screens wider than 768px. On smaller screens, the nav links are stacked.
stacked | boolean | false | Position NavItem vertically.
onSelect | function(eventKey, event) | | A callback fired when a NavItem is selected.
role | string | | ARIA role for the Nav.

#### NavItem

Name | Type | Default | Description
:--- | :--- | :------ | :----------
active | boolean | false |
disabled | boolean | false
eventKey | any | |
href | string | |
onClick | function(event) | |
onSelect | function(eventKey, event) | |
role | string | |

#### NavDropdown

Name | Type | Default | Description
:--- | :--- | :------ | :----------
componentClass | string|component | | A custom element for this component
dropup | boolean | false | The menu will open above the dropdown button, instead of below it.
disabled | boolean | false | Whether or not component is disabled.
pullRight | boolean | false | Align the menu to the right side of the Dropdown toggle.
open | boolean | false | Whether or not the Dropdown is visible.
onClose | function(event) | | A callback fired when the Dropdown closes.
onToggle | function(boolean) | | A callback fired when the Dropdown wishes to change visibility. Called with the requested `open` value.
onSelect | function(eventKey, event) | | A callback fired when a menu item is selected.
role | string | | If `'menuitem'`, causes the dropdown to behave like a menu item rather than a menu button.
rootCloseEvent | 'click'|'mousedown' | | Which event when fired outside the component will cause it to be closed.
title | node | |
noCaret | boolean | |
active | boolean | |

#### MenuItem

Name | Type | Default | Description
:--- | :--- | :------ | :----------
active | boolean | false | Highlight the menu item as active.
disabled | boolean | false | Disable the menu item, making it unselectable.
divider | boolean | false | Style the menu item as a horizontal rule, providing visual separation between groups of menu items.
eventKey | any | | Value passed to the `onSelect` handler, useful for identifying the selected menu item.
header | boolean | false | Style the menu item as a header label, useful for describing a group of menu items.
href | string | | HTML `href` attribute corresponding to `a.href`.
onClick | function(event) | | Callback fired when the menu item is clicked.
onSelect | function(eventKey, event) | | Callback fired when the menu item is selected.
 
## License

MIT
