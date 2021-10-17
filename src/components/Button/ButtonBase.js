import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({children, type, handleClick, size, icon, hasNextButton, isMobileFull, isLoading, ...attributes}) => {
	const handleButtonClick = () => {
		!isLoading && handleClick();
	};

	return (
		<button
			onClick={handleButtonClick}
			className={classNames(
				styles.button,
				{[styles.marginRight]: hasNextButton},
				{[styles.mobileFull]: isMobileFull},
				{[styles.disabled]: isLoading},
				styles[size],
				styles[type]
			)}
			{...attributes}
		>
			{icon && <div className={styles.icon}>{icon}</div>}
			{children && (
				<span className={classNames(styles.buttonText, {[styles.mobileHide]: !!icon})}>{children}</span>
			)}
		</button>
	);
};

export default Button;
