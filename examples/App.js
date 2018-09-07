import React from 'react';
import Tabs from './Tabs';
import LightTabs from './LightTabs';
import PanelTabs from './PanelTabs';

export default class App extends React.Component {
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
            <div>
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <Tabs state={this.state} actions={this.actions} />
                        </div>
                        <div className="col-md-6">
                            <LightTabs state={this.state} actions={this.actions} />
                        </div>
                        <div className="col-md-6">
                            <PanelTabs state={this.state} actions={this.actions} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
