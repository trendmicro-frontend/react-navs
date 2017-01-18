import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem } from '../src';

class App extends React.Component {
    state = {
        tab: 1
    };
    actions = {
        selectTab: (eventKey, event) => {
            this.setState({ tab: eventKey });
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Tabs
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 80 }}>
                                <Nav
                                    navStyle="tabs"
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Pills
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 80 }}>
                                <Nav
                                    navStyle="pills"
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Stacked Tabs
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 220 }}>
                                <Nav
                                    style={{ display: 'inline-block', minWidth: 80 }}
                                    navStyle="tabs"
                                    stacked
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Stacked Pills
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 220 }}>
                                <Nav
                                    style={{ display: 'inline-block', minWidth: 80 }}
                                    navStyle="pills"
                                    stacked
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Justified Tabs
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 80 }}>
                                <Nav
                                    navStyle="tabs"
                                    justified
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Justified Pills
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 80 }}>
                                <Nav
                                    navStyle="pills"
                                    justified
                                    activeKey={this.state.tab}
                                    onSelect={this.actions.selectTab}
                                >
                                    <NavItem eventKey={1}>Item 1</NavItem>
                                    <NavItem eventKey={2}>Item 2</NavItem>
                                    <NavItem eventKey={3}>Item 3</NavItem>
                                    <NavItem eventKey={4}>Item 4</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Panel Tabs
                                </div>
                            </div>
                            <div className="panel-body" style={{ minHeight: 80 }}>
                                <div style={{ border: '1px solid #bbb', minHeight: 250 }}>
                                    <Nav
                                        navStyle="panel-tabs"
                                        activeKey={this.state.tab}
                                        onSelect={this.actions.selectTab}
                                    >
                                        <NavItem eventKey={1}>Item 1</NavItem>
                                        <NavItem eventKey={2}>Item 2</NavItem>
                                        <NavItem eventKey={3}>Item 3</NavItem>
                                        <NavItem eventKey={4}>Item 4</NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
