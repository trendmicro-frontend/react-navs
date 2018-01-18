import React from 'react';
import { mount } from 'enzyme';
import { test } from 'tap';
import '../setupTests';
import { Nav, NavItem } from '../src';

test('<Nav />', (t) => {
    const wrapper = mount((
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
    ));
    t.equal(wrapper.find(Nav).length, 1, 'should render <Nav /> component');
    t.end();
});
