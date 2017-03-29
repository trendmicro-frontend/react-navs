import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Layout from './layout';
import Tabs from './Tabs';
import LightTabs from './LightTabs';
import PanelTabs from './PanelTabs';

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
        const name = 'React Navs';
        const url = 'https://github.com/trendmicro-frontend/react-navs';

        return (
            <div>
                <Layout.Navbar name={name} url={url} />
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

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
