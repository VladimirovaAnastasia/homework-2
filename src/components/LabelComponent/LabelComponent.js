import React from 'react';
import classNames from 'classnames';

import styles from './LabelComponent.module.scss';

const LabelComponent = ({children, className, label, direction, isRequired}) => {
	return (
		<div className={classNames(styles.wrapper, styles[direction])}>
			<p className={classNames(styles[className], styles.text, {[styles.required]: isRequired})}>{label}</p>
			{children}
		</div>
	);
};

export default LabelComponent;
