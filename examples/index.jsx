import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Layout from './layout';

export default class Index extends React.Component {
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
                <App />
            </div>
        );
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('container')
);
