import React from 'react';
import { mount } from 'enzyme';
import { test } from 'tap';
import '../setupTests';
import { Nav, NavItem, TabContent, TabPane } from '../src';

test('<Nav />', (t) => {
    const wrapper = mount((
        <div>
            <Nav
                navStyle="tabs"
                activeKey={1}
                onSelect={() => {
                    // TODO
                }}
            >
                <NavItem eventKey={1}>NavItem 1</NavItem>
                <NavItem eventKey={2}>NavItem 2</NavItem>
                <NavItem eventKey={3}>NavItem 3</NavItem>
            </Nav>
            <TabContent activeKey={1}>
                <TabPane eventKey={1}>Tab 1 content</TabPane>
                <TabPane eventKey={2}>Tab 2 content</TabPane>
                <TabPane eventKey={3}>Tab 3 content</TabPane>
            </TabContent>
        </div>
    ));
    t.equal(wrapper.find(Nav).length, 1, 'should render <Nav /> component');
    t.end();
});
