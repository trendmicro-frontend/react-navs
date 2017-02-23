import chainedFunction from 'chained-function';
import classNames from 'classnames';
import React, { cloneElement, Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './index.styl';

class Nav extends Component {
    static propTypes = {
        // Marks the child NavItem with a matching `href` prop as active.
        activeHref: PropTypes.string,
        // Marks the NavItem with a matching `eventKey` as active. Has a higher precedence over `activeHref`.
        activeKey: PropTypes.any,
        // Component visual or contextual style variants.
        navStyle: PropTypes.oneOf([
            'tabs',
            'light-tabs',
            'panel-tabs'
        ]),
        // Make tabs equal widths of their parent at screens wider than 768px.
        // On smaller screens, the nav links are stacked.
        justified: PropTypes.bool,
        // Position NavItem vertically.
        stacked: PropTypes.bool,
        // A callback fired when a NavItem is selected.
        onSelect: PropTypes.func,
        // ARIA role for the Nav.
        role: PropTypes.string
    };
    static defaultProps = {
        navStyle: 'tabs',
        justified: false,
        stacked: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    isActive({ props }, activeKey, activeHref) {
        if (props.active) {
            return true;
        }
        if (activeKey !== undefined && activeKey !== null && props.eventKey === activeKey) {
            return true;
        }
        if (activeHref && props.href === activeHref) {
            return true;
        }
        return false;
    }
    render() {
        const {
            navStyle,
            justified,
            stacked,
            onSelect,
            role,
            className,
            children,
            activeKey,
            activeHref,
            ...props
        } = this.props;

        return (
            <ul
                {...props}
                role={role}
                className={classNames(
                    className,
                    styles.nav,
                    { [styles.navTabs]: navStyle === 'tabs' },
                    { [styles.navLightTabs]: navStyle === 'light-tabs' },
                    { [styles.navPanelTabs]: navStyle === 'panel-tabs' },
                    { [styles.navJustified]: justified || navStyle === 'panel-tabs' },
                    { [styles.navStacked]: stacked }
                )}
            >
                {React.Children.map(children, child => {
                    if (!React.isValidElement(child)) {
                        return child;
                    }

                    const active = this.isActive(child, activeKey, activeHref);
                    const childOnSelect = chainedFunction(
                        child.props.onSelect,
                        onSelect
                    );

                    return cloneElement(child, {
                        active,
                        activeKey,
                        activeHref,
                        onSelect: childOnSelect
                    });
                })}
            </ul>
        );
    }
}

export default Nav;
