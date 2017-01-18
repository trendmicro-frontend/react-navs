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
  import { Nav, NavItems } from '@trendmicro/react-navs';

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

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>activeHref</td>
      <td>string</td>
      <td></td>
      <td>Marks the child NavItem with a matching `href` prop as active.</td>
    </tr>
    <tr>
      <td>activeKey</td>
      <td>any</td>
      <td></td>
      <td>Marks the NavItem with a matching `eventKey` as active. Has a higher precedence over `activeHref`.</td>
    </tr>
    <tr>
      <td>navStyle</td>
      <td>One of: 'tabs', 'pills', 'panel-tabs'</td>
      <td>'tabs'</td>
      <td>Component visual or contextual style variants.</td>
    </tr>
    <tr>
      <td>justified</td>
      <td>boolean</td>
      <td>false</td>
      <td>Make tabs or pills equal widths of their parent at screens wider than 768px. On smaller screens, the nav links are stacked.</td>
    </tr>
    <tr>
      <td>stacked</td>
      <td>boolean</td>
      <td>false</td>
      <td>Position NavItem vertically.</td>
    </tr>
    <tr>
      <td>onSelect</td>
      <td>function(eventKey, event)</td>
      <td></td>
      <td>A callback fired when a NavItem is selected.</td>
    </tr>
    <tr>
      <td>role</td>
      <td>string</td>
      <td></td>
      <td>ARIA role for the Nav.</td>
    </tr>
  </tbody>
</table>

#### NavItem

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>active</td>
      <td>boolean</td>
      <td>false</td>
      <td></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>boolean</td>
      <td>false</td>
      <td></td>
    </tr>
    <tr>
      <td>eventKey</td>
      <td>any</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>href</td>
      <td>string</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>function(event)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>onSelect</td>
      <td>function(eventKey, event)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>role</td>
      <td>string</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
