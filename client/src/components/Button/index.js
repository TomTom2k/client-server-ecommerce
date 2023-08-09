import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
	to,
	href,
	primary = false,
	outline = false,
	text = false,
	disable = false,
	rounded = false,
	small = false,
	large = false,
	children,
	className,
	leftIcon,
	rightIcon,
	onClick,
	...passPros
}) => {
	let Comp = 'button';
	const props = {
		onClick,
		...passPros,
	};

	//remove event listienr when btn disable
	if (disable) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key];
			}
		});
	}

	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}

	const classes = cx('wrapper', {
		[className]: className,
		primary,
		outline,
		text,
		small,
		large,
		disable,
		rounded,
	});
	return (
		<Comp className={classes} {...props}>
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
		</Comp>
	);
};

Button.propTypes = {};

export default Button;
