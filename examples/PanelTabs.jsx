import React from 'react';
import { MenuItem } from '@trendmicro/react-dropdown';
import { Nav, NavItem, NavDropdown } from '../src';
import Section from './Section';

const PanelTabs = ({ state, actions }) => {
    return (
        <Section className="row-md-5">
            <h3>Panel Tabs</h3>
            <div style={{ border: '1px solid #bbb', minHeight: 250 }}>
                <Nav
                    navStyle="panel-tabs"
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
        </Section>
    );
};

export default PanelTabs;
