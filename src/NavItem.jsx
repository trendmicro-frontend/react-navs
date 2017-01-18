import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Anchor from '@trendmicro/react-anchor';
import chainedFunction from './chainedFunction';
import styles from './index.styl';

export default class extends Component {
    static propTypes = {
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        role: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.func,
        onSelect: PropTypes.func,
        eventKey: PropTypes.any
    };
    static defaultProps = {
        active: false,
        disabled: false
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const { active, disabled, onClick, className, style, ...props } = this.props;

        delete props.onSelect;
        delete props.eventKey;

        // Injected down by <Nav>
        delete props.activeKey;
        delete props.activeHref;

        if (props.role === 'tab') {
            props['aria-selected'] = active;
        }

        return (
            <li
                role="presentation"
                className={classNames(
                    className,
                    { [styles.active]: active },
                    { [styles.disabled]: disabled }
                )}
                style={style}
            >
                <Anchor
                    {...props}
                    disabled={disabled}
                    onClick={chainedFunction(onClick, this.actions.handleClick)}
                />
            </li>
        );
    }
}
