import React from 'react';
import { MenuItem } from '@trendmicro/react-dropdown';
import { Nav, NavItem, NavDropdown } from '../src';
import Section from './Section';

const LightTabs = ({ state, actions }) => {
    return (
        <Section className="row-md-8">
            <h3>Light Tabs</h3>
            <h5>Default</h5>
            <div style={{ minHeight: 40 }}>
                <Nav
                    navStyle="light-tabs"
                    style={{
                        textAlign: 'center'
                    }}
                    activeKey={state.tab}
                    onSelect={actions.selectTab}
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
            </div>
            <hr />
            <h5>Stacked</h5>
            <div style={{ minHeight: 180 }}>
                <Nav
                    navStyle="light-tabs"
                    style={{
                        display: 'inline-block',
                        minWidth: 80,
                        textAlign: 'left'
                    }}
                    stacked
                    activeKey={state.tab}
                    onSelect={actions.selectTab}
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
            </div>
            <hr />
            <h5>Justified</h5>
            <div style={{ minHeight: 40 }}>
                <Nav
                    navStyle="light-tabs"
                    style={{
                        textAlign: 'center'
                    }}
                    justified
                    activeKey={state.tab}
                    onSelect={actions.selectTab}
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
            </div>
        </Section>
    );
};

export default LightTabs;
