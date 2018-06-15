import PropTypes from 'prop-types';

const TabPane = ({ active, children }) => {
    if (!active) {
        return null;
    }
    return children;
};

TabPane.propTypes = {
    active: PropTypes.bool,
};

export default TabPane;
