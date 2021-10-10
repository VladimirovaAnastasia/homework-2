import React from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

const InputBase = ({value, handleChange, placeholder, width, className, error, ...attributes}) => {
	return (
		<input
			className={classNames(styles.inputField, styles[className], {[styles.error]: error})}
			style={{width: width}}
			value={value}
			onChange={(event) => handleChange(event.target.value)}
			placeholder={placeholder}
			{...attributes}
		/>
	);
};

export default InputBase;
