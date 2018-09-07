TabContent with TabPane
(Compound Components)

```jsx
<Nav
    navStyle="light-tabs"
    style={{ textAlign: 'center' }}
    activeKey={2}
>
    <NavItem eventKey={1}>NavItem 1</NavItem>
    <NavItem eventKey={2}>NavItem 2</NavItem>
    <NavItem eventKey={3}>NavItem 3</NavItem>
    <NavItem eventKey={4}>NavItem 4</NavItem>
</Nav>
<TabContent activeKey={2}>
    <TabPane eventKey={1}>
        Tab 1 content
    </TabPane>
    <TabPane eventKey={2}>
        Tab 2 content
    </TabPane>
    <TabPane eventKey={3}>
        Tab 3 content
    </TabPane>
    <TabPane eventKey={4.1}>
        Tab 4.1 content
    </TabPane>
    <TabPane eventKey={4.2}>
        Tab 4.2 content
    </TabPane>
    <TabPane eventKey={4.3}>
        Tab 4.3 content
    </TabPane>
</TabContent>
```