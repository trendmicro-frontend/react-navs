import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.styl';

const TabPane = ({ active, eventKey, className, ...props }) => (
    <div
        {...props}
        className={cx(className, styles.tabPane, {
            [styles.active]: active
        })}
    />
);

TabPane.propTypes = {
    active: PropTypes.bool,
    eventKey: PropTypes.any
};

export default TabPane;
