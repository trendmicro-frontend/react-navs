import React from 'react';
import { MenuItem } from '@trendmicro/react-dropdown';
import Table from '@trendmicro/react-table';
import '@trendmicro/react-table/dist/react-table.css';

import { Nav, NavItem, NavDropdown, TabContent, TabPane } from '../src';
import { Section } from './layout';

const columns1 = [
    { title: 'Event Type', dataIndex: 'eventType1' },
    { title: 'Affected Devices', dataIndex: 'affectedDevices1' },
    { title: 'Detections', dataIndex: 'detections1', width: 800 }
];

const columns2 = [
    { title: 'Event Type', dataIndex: 'eventType2' },
    { title: 'Affected Devices', dataIndex: 'affectedDevices2' },
    { title: 'Detections', dataIndex: 'detections2' },
    { title: 'User', dataIndex: 'user' },
    { title: 'Domain', dataIndex: 'domain' }
];

const columns3 = [
    { title: 'Event Type', dataIndex: 'eventType3' },
    { title: 'Affected Devices', dataIndex: 'affectedDevices3' },
    { title: 'Detections', dataIndex: 'detections3' },
    { title: 'Endpoint', dataIndex: 'endpoint' },
    { title: 'Policy', dataIndex: 'policy' }
];

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
                <TabContent activeKey={state.tab}>
                    <TabPane eventKey={1}>
                        <Table
                            justified={false}
                            hoverable={false}
                            maxHeight={180}
                            useFixedHeader={true}
                            rowKey="id"
                            columns={columns1}
                            data={[]}
                        />
                    </TabPane>
                    <TabPane eventKey={2}>
                        <Table
                            justified={false}
                            hoverable={false}
                            maxHeight={180}
                            useFixedHeader={true}
                            rowKey="id"
                            columns={columns2}
                            data={[]}
                        />
                    </TabPane>
                    <TabPane eventKey={3}>
                        <Table
                            justified={false}
                            hoverable={false}
                            maxHeight={180}
                            useFixedHeader={true}
                            rowKey="id"
                            columns={columns3}
                            data={[]}
                        />
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
            </div>
            <hr />
            <h5>Stacked</h5>
            <div style={{ minHeight: 180 }}>
                <div className="row">
                    <div className="col-sm-3">
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
                    <div className="col-sm-9">
                        <TabContent activeKey={state.tab}>
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
                    </div>
                </div>
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
                <TabContent activeKey={state.tab}>
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
            </div>
        </Section>
    );
};

export default LightTabs;
