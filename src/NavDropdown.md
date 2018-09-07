```jsx
const MenuItem = require('@trendmicro/react-dropdown').MenuItem;
<Nav
    navStyle="light-tabs"
    style={{
        textAlign: 'center'
    }}
    activeKey={3}
>
    <NavItem eventKey={1}>NavItem 1</NavItem>
    <NavItem eventKey={2}>NavItem 2</NavItem>
    <NavItem eventKey={3}>NavItem 3</NavItem>
    <NavDropdown eventKey={4} title="NavItem 4">
        <MenuItem eventKey={4.1}>Action</MenuItem>
        <MenuItem eventKey={4.2}>Another action</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.3}>Separated link</MenuItem>
    </NavDropdown>
</Nav>
```