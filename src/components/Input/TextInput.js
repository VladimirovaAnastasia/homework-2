import React from 'react';
import InputBase from './InputBase';
import {ReactComponent as CloseButtonSvg} from '@/assets/icons/close-button.svg';

import styles from './Input.module.scss';

const TextInput = ({value, handleChange, placeholder, width, maxLength, error, autoFocus}) => {
	const clearField = () => {
		handleChange('');
	};

	return (
		<div className={styles.textInput}>
			<InputBase
				value={value}
				width={width}
				maxLength={maxLength}
				autoFocus={autoFocus}
				handleChange={handleChange}
				placeholder={placeholder}
				error={error}
			/>
			{value && <CloseButtonSvg onClick={clearField} className={styles.closeIcon} />}
		</div>
	);
};

export default TextInput;
