/* eslint no-continue: 0 */
import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './index.styl';

class NavDropdown extends PureComponent {
    static propTypes = {
        ...Dropdown.propTypes,

        // Highlight the nav dropdown as active.
        active: PropTypes.bool,

        title: PropTypes.node.isRequired,

        // Whether to prevent a caret from being rendered next to the title.
        noCaret: PropTypes.bool
    };
    static defaultProps = {
        active: false,
        noCaret: false
    };

    actions = {
        handleClick: (event) => {
            if (this.props.onSelect) {
                event.preventDefault();

                if (!this.props.disabled) {
                    this.props.onSelect(this.props.eventKey, event);
                }
            }
        }
    };

    isActive({ props }, activeKey, activeHref) {
        if (props.active) {
            return true;
        }

        if (activeKey !== undefined && props.eventKey === activeKey) {
            return true;
        }

        if (activeHref && props.href === activeHref) {
            return true;
        }

        if (typeof props.children !== 'object') {
            return false;
        }

        for (let child of props.children) {
            if (!React.isValidElement(child)) {
                continue;
            }

            if (this.isActive(child, activeKey, activeHref)) {
                return true;
            }
        }

        return false;
    }
    render() {
        const {
            title,
            noCaret,
            activeKey,
            activeHref,
            className,
            style,
            children,
            ...props
        } = this.props;
        const useCaret = !noCaret;

        const active = this.isActive(this, activeKey, activeHref);
        delete props.active;
        delete props.eventKey;

        // Split component props
        const dropdownProps = {};
        const toggleProps = {};
        Object.keys(props).forEach(propName => {
            const propValue = props[propName];
            if (Dropdown.ControlledComponent.propTypes[propName]) {
                dropdownProps[propName] = propValue;
            } else {
                toggleProps[propName] = propValue;
            }
        });
        toggleProps.componentClass = Anchor;

        const dropdownMenuItems = React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
                return child;
            }

            return React.cloneElement(child, {
                active: this.isActive(child, activeKey, activeHref)
            });
        });

        return (
            <Dropdown
                {...dropdownProps}
                componentClass="li"
                className={classNames(className, { [styles.active]: active })}
                style={style}
            >
                <Dropdown.Toggle noCaret {...toggleProps}>
                    {title}
                    {useCaret &&
                    <span
                        className={classNames(
                            styles.caret,
                            { [styles.dropup]: dropdownProps.dropup }
                        )}
                    />
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropdownMenuItems}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default NavDropdown;
